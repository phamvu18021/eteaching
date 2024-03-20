from odoo import fields, models, api, Command
import random
import string
import requests


class ThAdmissionsNews(models.Model):
    _name = 'th.admission'
    _description = 'Tin tuyển sinh'
    _inherit = ['mail.thread', 'mail.activity.mixin']

    name = fields.Text(string="Tiêu đề", required=True, tracking=True)
    th_school = fields.Many2one('th.school', 'Trường', required=True, tracking=True)
    th_major_combines = fields.Many2many('th.major.combine', string='Khối ngành', required=True, tracking=True)
    th_majors = fields.Many2many('th.major', string='Chuyên ngành', required=True, tracking=True)
    th_objects = fields.Many2many('th.object', string='Đối tượng', required=True, tracking=True)
    th_areas = fields.Many2many('th.area', string='Phạm vi tuyển sinh', required=True, tracking=True)
    th_methods = fields.Many2many('th.method', string='Phương thức tuyển sinh', required=True, tracking=True)
    th_target = fields.Integer('Chỉ tiêu', tracking=True)
    th_training_channels = fields.Many2many('th.training.channel', string='Hình thức đào tạo', required=True,
                                            tracking=True)
    slug_url = fields.Char(string='Slug URL', compute='_compute_slug', default='0')
    th_training_times = fields.Many2many('th.training.time', string='Thời gian đào tạo', tracking=True)
    th_block_combines = fields.Many2many('th.block.combine', string='Tổ hợp xét tuyển', tracking=True)
    th_places = fields.Many2many('th.place', string='Địa điểm học', tracking=True)
    th_station = fields.Many2many('th.station', string='Trạm tuyển sinh', tracking=True)
    th_exam_location = fields.Many2many('th.exam.location', string='Địa điểm thi', tracking=True)
    th_deadline = fields.Date('Thời hạn', tracking=True)
    idWordPress = fields.Char(string='idWordPress', default='0')
    th_point_rangers = fields.Many2many('th.point.range', string='Khoảng điểm', tracking=True)
    active = fields.Boolean('Active', default=True)

    state = fields.Selection(
        [('active', 'Hoạt Động'),
         ('stop_activity', 'Dừng hoạt động')],
        string="Trạng thái", default='active', tracking=True, compute='_compute_state', )

    @api.model
    def create(self, values):
        return super(ThAdmissionsNews, self).create(values)

    def open_create_wordpress_link(self, *args, **kwargs):
        base_url = 'https://eteachingwp.eufm.vn/wp-admin/post-new.php?cat=11&idOdoo='
        random_part = self.id or ''
        full_url = f'{base_url}{random_part}'
        return {
            'type': 'ir.actions.act_url',
            'url': full_url,
            'target': 'new',
        }

    def open_edit_wordpress_link(self, *args, **kwargs):
        base_url = 'https://eteachingwp.eufm.vn/wp-admin/post.php?post='
        random_part = self.idWordPress or ''
        full_url = f'{base_url}{random_part}&action=edit'
        return {
            'type': 'ir.actions.act_url',
            'url': full_url,
            'target': 'new',
        }

    @api.depends('th_deadline')
    def _compute_state(self):
        for record in self:
            current_date = fields.Date.today()
            if record.th_deadline and record.th_deadline < current_date:
                record.state = 'stop_activity'
            else:
                record.state = 'active'

    def unlink(self):
        # Soft delete the record by setting active to False
        self.write({'active': False})
        return True

    def restore(self):
        # Restore the record by setting active to True
        self.write({'active': True})
        return True

    def _mail_track(self, tracked_fields, initial_values):
        changes, tracking_value_ids = super()._mail_track(tracked_fields, initial_values)
        # Many2many tracking
        if len(changes) > len(tracking_value_ids):
            for changed_field in changes:
                if tracked_fields[changed_field]['type'] in ['one2many', 'many2many']:
                    field = self.env['ir.model.fields']._get(self._name, changed_field)
                    vals = {
                        'field': field.id,
                        'field_desc': field.field_description,
                        'field_type': field.ttype,
                        'tracking_sequence': field.tracking,
                        'old_value_char': ', '.join(initial_values[changed_field].mapped('name')),
                        'new_value_char': ', '.join(self[changed_field].mapped('name')),
                    }
                    tracking_value_ids.append(Command.create(vals))
                if tracked_fields[changed_field]['type'] in ['html']:
                    field = self.env['ir.model.fields']._get(self._name, changed_field)
                    vals = {
                        'field': field.id,
                        'field_desc': field.field_description,
                        'field_type': field.ttype,
                        'tracking_sequence': field.tracking,
                        'old_value_char': 'Nội dung cũ',
                        'new_value_char': 'Nội dung mới ',
                    }
                    tracking_value_ids.append(Command.create(vals))

        return changes, tracking_value_ids

    @api.depends('idWordPress')
    def _compute_slug(self):
        for record in self:
            if record.idWordPress:
                value_for_slug = record._call_wordpress_api(record.idWordPress)
                record.slug_url = value_for_slug

    def _call_wordpress_api(self, value):
        url = f'https://eteachingwp.eufm.vn/wp-json/wp/v2/posts/{value}'
        response = requests.get(url)
        if response.status_code == 200:
            wordpress_data = response.json()
            return wordpress_data.get('slug', '')
        else:
            return 0

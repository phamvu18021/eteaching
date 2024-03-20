from odoo import fields, models, api
from odoo.exceptions import ValidationError


class ThSearchSetting(models.Model):
    _name = 'th.search.setting'
    _description = 'Thiết lập tìm kiếm trên website'
    _inherit = ['mail.thread', 'mail.activity.mixin']

    name = fields.Char(string='Tên', required=True)
    th_condition_ids = fields.One2many('th.search.condition', 'th_setting_id', string='Điều kiện tìm kiếm')
    state = fields.Selection([
        ('draft', 'Nháp'),
        ('deployed', 'Triển khai')
    ], string='Trạng thái', default='draft', readonly=True)

    @api.model
    def create(self, vals):
        if vals.get('state') == 'deployed' and self.search([('state', '=', 'deployed')]) > 0:
            raise ValidationError("Chỉ có thể tồn tại một bản ghi ở trạng thái 'Triển khai'.")
        return super(ThSearchSetting, self).create(vals)


    def write(self, vals):
        if 'state' in vals and vals['state'] == 'deployed' and self.search_count([('state', '=', 'deployed')]) > 0:
            raise ValidationError("Chỉ có thể tồn tại một bản ghi ở trạng thái 'Triển khai'.")
        return super(ThSearchSetting, self).write(vals)

    def action_deploy(self):
        self.state = 'deployed'

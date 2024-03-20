from odoo import fields, models, api

th_model_domain = "[('model', 'in', [ 'th.admission', " \
                  "'th.benchmark', 'th.major', " \
                  "'th.training.channel', 'th.training.channel', " \
                  "'th.major.combine', 'th.method', " \
                  "'th.area', 'th.training.time', " \
                  "'th.block.combine', 'th.school', " \
                  "'th.search.condition', 'th.point.range', " \
                  "'th.place', 'th.object'])]"


class ThSearchCondition(models.Model):
    _name = 'th.search.condition'
    _description = 'Điều kiện tìm kiếm'

    th_model_id = fields.Many2one(
        'ir.model',
        string='Loại',
        domain=th_model_domain
    )
    th_display_name = fields.Char(string='Tên hiển thị', compute='_compute_display_name', store=True)
    th_setting_id = fields.Many2one('th.search.setting', string='Tìm kiếm')

    @api.depends('th_model_id',)
    def _compute_display_name(self):
        for record in self:
            record.th_display_name = f'{record.th_model_id.name}'

    @api.onchange('th_model_id')
    def _onchange_model_id(self):
        if self.th_model_id:
            self.th_display_name = f'{self.th_model_id.name} '

    _sql_constraints = [
        ('unique_model_per_search', 'UNIQUE(th_model_id, th_setting_id)', 'Mỗi Tìm kiếm chỉ cho phép 1 model.'),
    ]

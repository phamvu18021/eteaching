from odoo import fields, models

class ThBenchmarknews(models.Model):
    _name = 'th.benchmark'
    _description = 'Tin Điểm Chuẩn'
    _inherit = ['mail.thread', 'mail.activity.mixin']
    _rec_name = 'th_title'

    th_major = fields.Many2one('th.major', 'Chuyên ngành')
    th_block_combine = fields.Many2one('th.block.combine', string='Tổ hợp xét tuyển')
    th_point = fields.Float(string='Điểm chuẩn')
    th_note = fields.Text(string='Ghi chú')
    th_title = fields.Char(string='Tiêu đề')
    active = fields.Boolean('Active', default=True)

    def unlink(self):
        self.write({'active':False})
        return True

    def restore(self):
        self.write({'active':True})
        return True

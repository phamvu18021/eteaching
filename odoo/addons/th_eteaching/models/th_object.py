from odoo import fields, models


class ThObject(models.Model):
    _name = 'th.object'
    _description = 'Đối tượng'

    name = fields.Char(string="Đối tượng", required=True)
    description = fields.Text("Mô tả")
    th_code = fields.Char("Mã đối tượng", required=True)

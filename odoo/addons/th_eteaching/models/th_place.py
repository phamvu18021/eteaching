from odoo import fields, models


class ThPlace(models.Model):
    _name = 'th.place'
    _description = 'Địa điểm'

    name = fields.Char(string="Địa Điểm", required=True)
    th_code = fields.Char("Mã Địa điểm", required=True)
    description = fields.Text("Mô tả")

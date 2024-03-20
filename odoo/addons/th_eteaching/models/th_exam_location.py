from odoo import fields, models


class ThExamLocation(models.Model):
    _name = 'th.exam.location'
    _description = 'Địa điểm thi'

    name = fields.Char(string="Địa điểm thi", required=True)
    th_code = fields.Char("Mã Địa điểm thi", required=True)
    description = fields.Text("Mô tả")
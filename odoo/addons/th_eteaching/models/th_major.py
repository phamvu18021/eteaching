from odoo import fields, models


class ThUniversityMajor(models.Model):
    _name = 'th.major'
    _description = 'Chuyên ngành đại học'

    name = fields.Char(string="Chuyên ngành", required=True)
    description = fields.Text("Mô tả")
    th_code = fields.Char("Mã Chuyên Ngành", required=True)


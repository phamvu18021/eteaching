from odoo import fields, models


class ThUniversitySector(models.Model):
    _name = 'th.major.combine'
    _description = 'Khối ngành đại học'

    name = fields.Char(string="Khối ngành", required=True)
    description = fields.Text("Mô tả")
    th_code = fields.Char("Mã Khối Ngành", required=True)

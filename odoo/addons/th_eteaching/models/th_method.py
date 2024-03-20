from odoo import fields, models


class ThAdmissionMethod(models.Model):
    _name = 'th.method'
    _description = 'Phương thức tuyển sinh'

    name = fields.Char(string="Phương thức", required=True)
    description = fields.Text("Mô tả")
    th_code = fields.Char("Mã Phương thức", required=True)

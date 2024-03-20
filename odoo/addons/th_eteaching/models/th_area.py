from odoo import fields, models


class ThAdmissionScope(models.Model):
    _name = 'th.area'
    _description = 'Phạm vi tuyển sinh'

    name = fields.Char(string="Phạm vi", required=True)
    description = fields.Text("Mô tả")
    th_code = fields.Char("Mã phạm vi", required=True)

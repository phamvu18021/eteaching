from odoo import fields, models


class ThStation(models.Model):
    _name = 'th.station'
    _description = 'Trạm tuyển sinh'

    name = fields.Char(string="Trạm tuyển sinh", required=True)
    th_code = fields.Char("Mã Trạm tuyển sinh", required=True)
    description = fields.Text("Mô tả")
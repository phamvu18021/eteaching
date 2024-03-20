# -*- coding: utf-8 -*-
{
    'name': "ABS Eteaching",

    'summary': """
        ABS Eteaching""",
    'category': 'AUM Business System/ Eteaching',

    'description': """
        Long description of module's purpose
    """,
    'author': "AUM",
    'website': "",
    'license': 'LGPL-3',
    'version': '0.2',

    # any module necessary for this one to work correctly
    'depends': [
        'base',
        'mail'
    ],
    'data': [
        'security/ir.model.access.csv',
        'views/th_school_views.xml',
        'views/th_training_channel_view.xml',
        'views/th_training_time_view.xml',
        'views/th_block_combine_view.xml',
        'views/th_object_view.xml',
        'views/th_major_view.xml',
        'views/th_area_view.xml',
        'views/th_method_view.xml',
        'views/th_major_combine_view.xml',
        'views/th_place_views.xml',
        'views/th_exam_location_view.xml',
        'views/th_station_view.xml',
        'views/th_admission_view.xml',
        'views/th_point_range_views.xml',
        'views/th_benchmark_view.xml',
        'views/th_search_setting_view.xml',
        'views/menus.xml',
    ],
    # data files containing optionally loaded demonstration data
    'demo': [
        # 'demo/demo_data.xml',
    ],
    'installable': True,
    'application': True,
    'auto_install': False,
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkExperience extends Model
{
    /**
   * The attributes that should be mutated to dates.
   *
   * @var array
   */
   protected $dates = ['created_at', 'updated_at', 'period_from', 'period_to'];
}

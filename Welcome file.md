

# MARKDOWN TUTORIAL

## *Python*

```python
import math
import numpy as np
from scipy import constants as cons
```
### ***Latex***
$$\large T^{' }=\frac{T}{\sqrt{1-\frac{V^2}{c^2}}}$$


```python
T=lambda v:1/np.sqrt(1-(v**2/cons.c**2))
```
```python
T(0.2*cons.c)

1.0206207261596576
```
$e^{\pi i}+1=0$

![demo](https://latex.codecogs.com/gif.latex?%5Clarge%20T%5E%7B%27%20%7D=%5Cfrac%7BT%7D%7B%5Csqrt%7B1-%5Cfrac%7BV%5E2%7D%7Bc%5E2%7D%7D%7D)

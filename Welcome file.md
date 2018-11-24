

# MARKDOWN TUTORIAL

### Python
```python
import math
import numpy as np
from scipy import constants as cons
```
### Latex
$$\large T^{' }=\frac{T}{\sqrt{1-\frac{V^2}{c^2}}}$$


```python
T=lambda v:1/np.sqrt(1-(v**2/cons.c**2))
```
```python
T(0.2*cons.c)

1.0206207261596576
```
This is Newtonian gravitation formula $F=\frac{Gm_{1}m_{2}}{r^2}$ 

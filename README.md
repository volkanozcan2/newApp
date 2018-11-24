

# demo
```python
import math
import numpy as np
from scipy import constants as cons
```

$$\large t_{' }=\frac{t^{}}{\sqrt{1-\frac{V^2}{c^2}}}$$


```python
T=lambda v:1/np.sqrt(1-(v**2/cons.c**2))
```
```python
T(0.2*cons.c)

1.0206207261596576
```
   



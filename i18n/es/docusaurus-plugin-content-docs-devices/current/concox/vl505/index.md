---
slug: /concox/vl505
id: vl505
sidebar_label: VL505
sidebar_class_name: menu_item_tracker
---
# Concox - VL505

![VL505](./tracker.png)

El VL505 de un fabricante de dispositivos establecido es un rastreador GPS GNSS 4G OBD-II ultra compacto, plug-and-play, compatible con Plaspy y diseñado tanto para vehículos privados como para flotas comerciales. Diseñado para una instalación sin esfuerzo a través del puerto OBD-II del vehículo, el VL505 ofrece seguimiento en tiempo real continuo y telemetría detallada a través de LTE Cat 1, lo que lo convierte en una opción práctica para la gestión de flotas, monitorización anti-robo y programas de seguros basados en el uso que requieren posicionamiento fiable y alertas accionables.

Con posicionamiento de múltiples fuentes \(GPS, BDS, A-GPS y LBS\), acelerómetro y micrófono a bordo, y soporte para configuración remota vía SMS o plataformas en la nube como Tracksolid Pro, el VL505 ofrece una solución compacta pero capaz para alimentar a Plaspy con ubicación precisa, eventos de movimiento y alertas configurables. Su tamaño reducido y bajo consumo de energía simplifican la implementación en grandes flotas, manteniendo certificaciones regulatorias \(FCC, CE\) y una conectividad celular estable a través de variantes regionales VL505-NA y VL505-EU.

## Características clave

- Instalación OBD-II plug-and-play para un despliegue rápido y una alimentación eléctrica fiable del vehículo, ideal para implementaciones de gestión de flotas.
- Conectividad LTE Cat 1 para transmisión de datos estable y de baja latencia hacia Plaspy y otras plataformas en la nube.
- GNSS de múltiples constelaciones \(GPS, BDS, A-GPS, LBS\) con alta precisión &lt;2.5 m CEP para un seguimiento en tiempo real fiable.
- Conjunto completo de alertas: entrada/salida de geocerca, vibración, exceso de velocidad, desconexión de la fuente de alimentación, punto ciego GPS y eventos de comportamiento de conducción.
- Acelerómetro y micrófono a bordo para monitorización de voz a distancia \(≤5 m\) y detección de colisiones/DBA.
- Una batería interna de respaldo pequeña y un formato compacto permiten una instalación discreta y registro temporal si se interrumpe la alimentación.
- Soporte eSIM e indicadores LED para facilitar el aprovisionamiento y las comprobaciones de estado operativo durante la instalación.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el VL505 transmite datos de GPS y telemetría a través de LTE Cat 1 para ofrecer seguimiento en tiempo real, alertas e informes históricos. Plaspy recibe actualizaciones de ubicación, eventos de movimiento y alertas del dispositivo, de modo que los gestores de flotas pueden monitorizar los vehículos en un mapa en vivo, activar notificaciones y generar análisis para la seguridad y la eficiencia operativa. Donde estén disponibles los PIDs OBD-II del vehículo y el VL505/vehículo los admita, Plaspy también puede consolidar telemetría adicional, como estado de ignición y parámetros relacionados con el combustible, para enriquecer informes y paneles.

- Actualizaciones de ubicación y telemetría en tiempo real \(GPS/BDS/A-GPS/LBS\) a Plaspy para un seguimiento fiable y la posibilidad de reproducir puntos históricos.
- Alertas de eventos entregadas a Plaspy: entrada/salida de geocerca, vibración inesperada, exceso de velocidad, desconexión de la alimentación y notificaciones de punto ciego GPS.
- Análisis de comportamiento de conducción \(aceleración brusca, frenado brusco, giro brusco, detección de colisiones\) disponibles en Plaspy para supervisión de seguridad y coaching.
- Eventos del micrófono y del acelerómetro disponibles para Plaspy para investigación de incidentes y monitorización de voz remota \(rango de informe ≤5 m\).
- Registro temporal en el borde \(hasta 400 entradas GPS\) que garantiza que no haya pérdida de datos inmediata durante interrupciones breves de conectividad antes de que Plaspy sincronice los puntos históricos.

## Resumen técnico

| Conectividad | Celular LTE Cat 1 \(4G\) |
| --- | --- |
| Bandas / Variantes | Variantes regionales: VL505-NA y VL505-EU \(soporte de bandas regional por modelo\) |
| Alimentación & Batería | Voltaje de entrada 9–36 V DC; batería de respaldo interna 50 mAh / 3.7 V; corriente en espera ~2 mA; funcionamiento ~35 mA \(una actualización cada 10 s\) |
| Interfaces | Conexión plug-and-play vía puerto OBD-II del vehículo; indicadores LED para Power \(Rojo\), GNSS \(Azul\), Cellular \(Verde\) |
| GNSS & Posicionamiento | GPS, BDS, A-GPS y LBS; precisión de posicionamiento &lt;2.5 m CEP; sensibilidad de seguimiento –163 dBm; sensibilidad de adquisición –158 dBm; hot start ≤1 s; cold start ≤28 s \(cielo abierto\) |
| Sensores & Entradas | Acelerómetro a bordo para movimiento y eventos DBA; micrófono a bordo \(rango de monitorización de voz ≤5 m\); almacena hasta 400 entradas de datos GPS para registro temporal |
| SIM & Aprovisionamiento | Soporte eSIM; configuración remota vía SMS y plataforma en la nube \(p. ej., Tracksolid Pro\) |
| Factor de forma | Formato compacto OBD-II: 45.0 × 30.0 × 22.5 mm; peso 26 g |
| Certificaciones | FCC, CE |

## Casos de uso

- Gestión de flotas y despacho en tiempo real: rastrea la ubicación de los vehículos, supervisa el comportamiento del conductor y optimiza las rutas con los paneles de Plaspy.
- Antirrobo y recuperación de vehículos: disparadores de geocerca y alertas de desconexión de energía ayudan a detectar movimientos no autorizados y permiten una respuesta rápida.
- Seguro basado en el uso \(UBI\): capturar métricas de comportamiento de conducción \(frenado/aceleración bruscos y giros\) para apoyar la puntuación de riesgo y las primas.
- Seguridad y cumplimiento del conductor: usar la detección de colisiones y análisis de comportamiento para entrenar a los conductores, reducir incidentes y disminuir costos operativos.
- Monitoreo de vehículos privados y supervisión de flotas familiares: instalación discreta y sencilla para compartir ubicación de forma continua y alertas de seguridad.

## Por qué elegir este rastreador con Plaspy

El VL505 combina la simplicidad de una instalación OBD-II plug-and-play con rendimiento LTE Cat 1 y GNSS de múltiples fuentes para entregar ubicación y telemetría fiables y de baja latencia para los usuarios de Plaspy. Su pequeño tamaño y bajo consumo de energía facilitan despliegues a gran escala, sin ser intrusivos, mientras que el soporte eSIM y los indicadores LED simplifican el aprovisionamiento en campo. Para operadores de flotas y organizaciones centradas en el seguimiento en tiempo real, la protección antirrobo y las ideas basadas en telemetría, el VL505 ofrece un dispositivo compacto y certificado que alimenta a Plaspy con posicionamiento preciso, eventos de movimiento y alertas configurables, lo que posibilita una respuesta ante incidentes más rápida, una gestión de conductores más eficiente y análisis de flotas accionables.

  \<meta itemprop="name" content="VL505 OBD-II 4G GNSS Tracker">
  \<meta itemprop="brand" content="VL Series">


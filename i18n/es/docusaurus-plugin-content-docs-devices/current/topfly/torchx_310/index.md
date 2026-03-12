---
slug: /topfly/torchx_310
id: torchx_310
sidebar_label: TorchX 310
sidebar_class_name: menu_item_tracker
---
# TopFly - TorchX 310

![TorchX 310](./tracker.jpg)

El TorchX 310 es un rastreador GPS OBD-II plug-and-play diseñado para un despliegue rápido de flotas y uso individual en vehículos. Compatible con Plaspy desde la primera instalación, el TorchX 310 ofrece telemetría CAN-bus, rastreo en tiempo real, soporte para sensores BLE y alertas de conductor integradas para que los gestores de flotas obtengan ubicación precisa, diagnósticos del vehículo y datos de comportamiento sin instalación compleja.

El dispositivo compacto se conecta directamente al puerto OBD-II del vehículo y lee el VIN, el odómetro real, el nivel de combustible, los códigos de diagnóstico \(DTC\), el estado de ignición y otros parámetros CAN. Con conectividad LTE Cat‑M1 \(con respaldo NB2/2G cuando corresponda\), GNSS multiconstelación interno y BLE 5.0 para emparejamiento de accesorios, el TorchX 310 ofrece telemetría fiable e informes seguros adecuados para la gestión de flotas basada en Plaspy, flujos de trabajo antirrobo y programas de seguros basados en el uso \(UBI\).

## Puntos clave

- Instalación OBD-II plug-and-play para despliegues rápidos y tiempos de inactividad mínimos.
- Compatible con Plaspy para un seguimiento en tiempo real, generación de informes y dashboards sin interrupciones.
- Lecturas directas del bus CAN de VIN, odómetro, nivel de combustible y DTC para telemetría precisa.
- Soporte BLE 5.0 para emparejar sensores de temperatura, sensores de puertas, relevadores inalámbricos y llaveros.
- Conectividad LTE Cat‑M1 con respaldo NB2/2G y cobertura mundial de bandas para flotas globales.
- Actualizaciones de alta frecuencia \(configurables hasta cada 3 segundos\) y búfer de 49,000 puntos para registro offline fiable.
- Funciones de seguridad del conductor con detección de accidentes, monitoreo de conductas de conducción brusas y alertas en cabina.

## Cómo funciona con Plaspy

Cuando se empareja con Plaspy, el TorchX 310 envía telemetría GNSS y CAN derivada a tu instancia de Plaspy utilizando protocolos de transporte estándar. Plaspy procesa la ubicación, el VIN y los datos de diagnóstico para generar mapas en tiempo real, informes automáticos y flujos de alertas para la gestión de flotas, monitoreo antirrobo y análisis del comportamiento del conductor.

- Actualización de ubicación y telemetría en tiempo real \(intervalos de informe configurables, hasta cada 3 segundos\).
- Estado del vehículo: VIN, odómetro real, nivel de combustible y códigos de diagnóstico \(DTC\) procedentes del bus CAN.
- Estado de ignición y comportamiento de conducción: aceleración brusca, frenado brusco, giros pronunciados, exceso de velocidad y eventos de choque.
- Datos en búfer: hasta 49,000 puntos de ubicación almacenados cuando no hay cobertura de red y enviados a Plaspy cuando la conectividad se restablece.
- Integración de accesorios BLE: sensores de temperatura, sensores de puertas, relevadores inalámbricos y llaveros para telemetría extendida y escenarios de control remoto.
- Transportes seguros: informes TCP/UDP/MQTT/SMS con opciones de cifrado MD5 y AES128 para proteger la telemetría en tránsito.

## Resumen técnico

| Conectividad | 4G LTE Cat‑M1 con respaldo NB2/2G \(cuando corresponda\); informes TCP/UDP/MQTT/SMS |
| --- | --- |
| Bandas | Cobertura mundial de bandas \(el soporte de bandas regionales varía según el modelo\) |
| GNSS | GNSS interno que admite GPS, BeiDou, Galileo y QZSS; antena interna |
| Bluetooth | BLE 5.0 para emparejar sensores externos, relevadores inalámbricos y llaveros |
| Potencia y batería | Tensión de operación 7–32 V DC; batería de respaldo interna Li‑Polímero de 100 mAh para alertas de desconexión |
| Interfaces y Protocolos | Se conecta a OBD-II; admite protocolos OBDII/CAN estandarizados \(ISO 15765, SAE J1939, ISO 14230/KWP2000, ISO9142-2, SAE J1708\); ranura nano SIM; USB para depuración/configuración |
| Datos y Reportes | Intervalos de informe configurables \(tan frecuentes como 3 segundos\); búfer de hasta 49,000 puntos GPS; opciones de cifrado MD5 y AES128 |
| Indicadores y Puertos | Indicadores LED para red, diagnóstico y GNSS; puerto USB mini para depuración; ranura nano SIM |
| Seguridad y Monitorización | Detección de choques, monitoreo del comportamiento de conducción \(aceleración brusca, frenado brusco y giros brusos\), alertas por exceso de velocidad y interferencia de red; zumbador interno para avisos al conductor |
| Factor de forma y entorno | Dimensiones 52.8 × 47.8 × 24.8 mm; peso 70 g; temperatura de operación -30°C a +80°C; almacenamiento -40°C a +85°C |

## Casos de uso

- Gestión de flotas: rastreador GPS plug-and-play para ubicación de vehículos, monitorización de combustible y diagnósticos basados en CAN en flotas comerciales.
- UBI y comportamiento del conductor: captura de eventos de conducción brusos, exceso de velocidad y detección de accidentes para seguros basados en el uso \(UBI\) o programas de coaching para conductores.
- Antirrobo y alertas de manipulación: alertas de desconexión mediante la batería de respaldo y detección de interferencias en la red para proteger vehículos de alto valor.
- Monitoreo de cadena de frío y activos: sensores BLE para temperatura y estado de puerta integrados con la telemetría del vehículo para transporte refrigerado.
- Control remoto de relevadores y acceso: emparejar relevadores inalámbricos o llaveros vía BLE para habilitar inmovilizador externo o flujos de trabajo de control remoto cuando sea necesario.

## Por qué elegir este rastreador con Plaspy

Elegir el TorchX 310 como rastreador GPS compatible con Plaspy ofrece una mezcla práctica de telemetría a nivel de vehículo y conectividad moderna. Su integración OBD-II le proporciona información precisa de VIN, odómetro, nivel de combustible y DTC sin necesidad de cables adicionales, mientras que la conectividad LTE Cat‑M1 y un amplio búfer offline mantienen la continuidad para el seguimiento en tiempo real y la gestión de flotas. El soporte BLE 5.0 amplía la telemetría con sensores de temperatura y de puertas o relevadores para inmovilización y control de acceso, y el zumbador interno ofrece avisos inmediatos en cabina para ayudar a reducir la conducción imprudente.

Para operaciones que ejecutan Plaspy, el TorchX 310 ofrece flujos de datos fiables \(TCP/UDP/MQTT/SMS\), opciones de cifrado \(MD5, AES128\) y actualizaciones de firmware por aire para mantener los dispositivos seguros y actualizados. Esa combinación convierte al TorchX 310 en una opción fiable y escalable para organizaciones que buscan un rastreador GPS compacto que equilibre diagnósticos CAN-bus, seguimiento en tiempo real, alertas antirrobo e integración de sensores BLE bajo una plataforma de gestión habilitada por Plaspy.


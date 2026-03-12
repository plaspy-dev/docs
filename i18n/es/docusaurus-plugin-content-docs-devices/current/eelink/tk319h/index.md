---
slug: /eelink/tk319h
id: tk319h
sidebar_label: TK319‑H
sidebar_class_name: menu_item_tracker
---
# EElink - TK319‑H

![TK319‑H](./tracker.jpg)

El TK319‑H es un rastreador GPS 3G compacto, diseñado para un seguimiento confiable de vehículos y telemetría. Compatible con Plaspy desde el primer uso, el TK319‑H ofrece seguimiento en tiempo real, detección de ACC/ignición y un conjunto de alarmas de movimiento y seguridad que se integran directamente con la plataforma de gestión de flotas de Plaspy para un monitoreo simplificado y una respuesta ante incidentes rápida.

Diseñado para flotas, vehículos de alquiler y activos de alto valor, el TK319‑H combina posicionamiento GPS/LBS con soporte AGPS, expansión serial/GPIO y interfaces opcionales de relé y sensor de temperatura. Su formato compacto y su amplio rango de entrada de DC lo hacen adecuado para diversos tipos de vehículos, manteniendo la instalación e integración con Plaspy sencillas.

## Aspetos clave

- Compatible con Plaspy: envía ubicación y telemetría utilizando el protocolo MoveLink/EELINK para una rápida integración con los paneles y APIs de Plaspy.
- Seguimiento en tiempo real: posicionamiento GPS/LBS con soporte AGPS que ofrece actualizaciones continuas de ubicación para la gestión de flotas y la monitorización antifraude.
- Alarmas integrales: alarmas de colisión, aceleración, desaceleración, vibración y sobrevelocidad para la seguridad y detección de incidentes.
- Entradas de ignición y telemetría: detección ACC \(estado de ignición\) y expansión serial/GPIO para telemetría y sensores personalizados.
- Opción de corte remoto: el relé opcional soporta corte remoto de combustible o energía \(útil para flujos de inmovilización/antirrobo gestionados a través de Plaspy\).
- Resiliencia de energía: entrada DC de 9–72 V y una batería de respaldo de 140 mAh, con alertas de batería baja y corte por alimentación externa.
- Compacto y ligero: instalación discreta con un impacto mínimo en el espacio \(89 × 37 × 12 mm, 46 g\).

## Cómo funciona con Plaspy

La integración con Plaspy es sencilla: el TK319‑H transmite ubicación y telemetría a través de redes GSM/WCDMA utilizando el protocolo MoveLink/EELINK, lo que permite a Plaspy mostrar posiciones en tiempo real, generar alertas y registrar viajes históricos. Plaspy procesa las alarmas y los mensajes de estado del dispositivo para impulsar los flujos de trabajo de la flota, las acciones antifraude y los informes de cumplimiento.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy vía MoveLink/EELINK para visualización en mapas y enrutamiento.
- La detección ACC/ignición permite a Plaspy distinguir entre conducción y estado de estacionamiento y activar informes o alertas basados en la ignición.
- Las alarmas de colisión, sobrevelocidad, vibración, aceleración y desaceleración se envían a Plaspy para notificaciones inmediatas y registro de incidentes.
- El relé opcional puede gestionarse mediante flujos de trabajo de Plaspy para implementar un inmovilizador remoto o corte de combustible/energía cuando esté autorizado.
- La alternativa LBS \(base-station\) mantiene la visibilidad de la ubicación cuando las señales GPS no están disponibles, ayudando a Plaspy a mantener la continuidad del rastreo.

## Visión general técnica

| Conectividad | Redes celulares GSM y WCDMA \(3G\) |
| --- | --- |
| Bandas | Las bandas de frecuencia específicas dependen del modelo/región y deben confirmarse con el proveedor |
| Alimentación y batería | Entrada 9–72 V DC; batería de respaldo de 140 mAh. Envía alertas de batería baja y corte por alimentación externa. |
| Interfaces | Detección ACC \(encendido\); relé opcional para corte remoto de combustible/energía; expansión serial y GPIO; soporte opcional de sensor de temperatura |
| GNSS | GPS con soporte AGPS; precisión de posicionamiento ~5–15 m \(GPS\) y ~200 m \(base-station/LBS\) |
| Bluetooth | No especificado en la descripción del dispositivo proporcionada |
| Gestión remota y protocolo | Integración mediante MoveLink / EELINK \(utilizado para transmitir ubicación, alarmas y telemetría a plataformas backend\) |
| Formato | 89 × 37 × 12 mm; 46 g — rastreador compacto para vehículos |

## Casos de uso

- Gestión de flotas: datos continuos de GPS y estado de ACC ayudan a Plaspy a optimizar rutas, informes de comportamiento del conductor y métricas de utilización.
- Antirrobo e inmovilización: el relé opcional soporta flujos de trabajo de corte remoto de combustible/energía que Plaspy puede activar tras alertas verificadas o detección de robo.
- Monitoreo de accidentes y seguridad: las alarmas integradas de colisión, sobrevelocidad y vibración proporcionan datos de incidentes de inmediato a los despachadores a través de Plaspy.
- Protección de combustible y energía: alertas de pérdida de energía y control de relé ayudan a asegurar activos y permitir la intervención mediante notificaciones de Plaspy.
- Instalaciones para cadena de frío o con control de temperatura \(opcional\): cuando esté instalado el sensor de temperatura, Plaspy puede registrar y alertar sobre umbrales de temperatura para mercancías sensibles.

## Por qué elegir este rastreador con Plaspy

Para organizaciones que buscan un rastreador GPS compacto, compatible con Plaspy, con conectividad 3G probada y E/S flexibles, el TK319‑H es una opción práctica. Su combinación de seguimiento en tiempo real, señales de alarma robustas \(colisión, sobrevelocidad, vibración\), detección ACC y soporte opcional de relé/sensor de temperatura lo hace adecuado para la gestión de flotas, medidas antifraude y necesidades básicas de telemetría. La entrada amplia de 9–72 V y la batería de respaldo aseguran la continuidad del monitoreo, mientras que la integración MoveLink/EELINK simplifica la incorporación a Plaspy para una visibilidad y control inmediatos.

La plataforma de Plaspy también admite periféricos y sensores adicionales cuando sea necesario; si su despliegue requiere sensores Bluetooth u otra telemetría especializada, discuta las opciones de integración con el equipo de cuentas de Plaspy o con el proveedor del dispositivo para confirmar las rutas de expansión disponibles. Juntos, el TK319‑H y Plaspy ofrecen rastreo en tiempo real confiable, telemetría accionable y capacidades de control remoto para proteger activos y mejorar la eficiencia operativa.


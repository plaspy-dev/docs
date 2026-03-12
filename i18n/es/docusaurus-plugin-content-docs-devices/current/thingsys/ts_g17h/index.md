---
slug: /thingsys/ts_g17h
id: ts_g17h
sidebar_label: TS-G17H
sidebar_class_name: menu_item_tracker
---
# ThingSys - TS-G17H

![TS-G17H](./tracker.jpg)

El TS-G17H es un rastreador GPS para vehículos compacto y compatible con Plaspy, diseñado para un seguimiento en tiempo real fiable y discreto. Pensado para uso mundial, el TS-G17H combina conectividad GSM quad-band con reportes GPRS TCP/IP y el protocolo GT06 para proporcionar a equipos de gestión de flotas y a propietarios individuales localización precisa, telemetría y herramientas básicas de anti-robo. Su tamaño reducido y su amplio rango de tensión de entrada lo hacen ideal como rastreador GPS oculto para coche o localizador de motocicletas.

Esta unidad ha sido diseñada para implementaciones prácticas: detección ACC/encendido, una antena GPS integrada y batería de respaldo, y control de relés para inmovilización remota, proporcionan las funciones básicas que esperan los operadores de flotas y conductores preocupados por la seguridad. Cuando se integra con Plaspy, el TS-G17H ofrece seguimiento en tiempo real fiable, alertas por exceso de velocidad y geocerca, y opciones de control remoto que simplifican la monitorización de vehículos y los flujos de recuperación ante robos.

## Aspectos destacados

- Compatible con Plaspy a través del protocolo GT06 y GPRS \(TCP/IP\) para un seguimiento en tiempo real sin interrupciones y reporte al servidor.
- GSM quad-band \(850/900/1800/1900\) garantiza cobertura celular global para la gestión de flotas y vehículos remotos.
- Control de relé para funcionalidad de inmovilizador remoto — útil para la respuesta ante robos y el apagado remoto del vehículo.
- Amplio rango de tensión de entrada \(9–100 V DC\) y bajo consumo de corriente en reposo lo hacen adecuado para automóviles, camiones y motocicletas.
- Antena GPS integrada y batería de respaldo permiten mantener el reporte de posición durante interrupciones de energía.
- Soporta alarmas de geocerca y de exceso de velocidad para alertas automáticas de incidentes y monitoreo de cumplimiento.
- Factor de forma compacto para instalación discreta y aplicaciones de rastreador GPS oculto para vehículos.

## Cómo funciona con Plaspy

La integración con Plaspy es simple: el TS-G17H utiliza GPRS TCP/IP para reportar la posición y telemetría a un servidor de Plaspy e implementa el protocolo GT06, ampliamente utilizado, para el formateo de mensajes. Una vez configurado para apuntar al servidor y puerto de Plaspy, el rastreador envía actualizaciones periódicas de posición, eventos de alarma y estados que Plaspy ingiere para el seguimiento en tiempo real, la reproducción histórica y las alertas.

- Actualizaciones de posición y telemetría en tiempo real mediante GPRS \(TCP/IP\) y protocolo GT06 para su visualización en los paneles de Plaspy.
- El estado de encendido/ACC se reporta para reflejar si el vehículo está encendido o apagado; resulta útil para la gestión de flotas y auditoría de rutas.
- Alarmas de geocerca y de exceso de velocidad se transmiten de inmediato a Plaspy para activar notificaciones y flujos de trabajo.
- Capacidad de inmovilizador remoto mediante control de relé: las órdenes pueden emitirse desde Plaspy o vía SMS/comando, según la configuración.
- Comandos estándar por SMS/comando y configuración del servidor para aprovisionamiento remoto, resolución de problemas y verificación de IMEI/servidor.
- Los datos de telemetría del dispositivo pueden combinarse con sensores externos \(cuando estén disponibles\) para soportar flujos de trabajo de monitoreo de combustible en Plaspy.

## Descripción Técnica

| Modelo | TS-G17H |
| --- | --- |
| Conectividad | Quad-band GSM 850/900/1800/1900; GPRS Class 12 \(TCP/IP\) |
| Protocolo | GT06 \(formatos estándar de mensajes de seguimiento\) |
| Bandas | 850 / 900 / 1800 / 1900 MHz |
| Alimentación y Batería | Tensión de entrada 9–100V DC; batería de respaldo integrada; corriente típica ≈22mA @12V, ≈12mA @24V |
| Interfaces | Detección ACC/encendido; control de relé para corte remoto / inmovilizador; cable de alimentación \(rojo/negro\), cable ACC \(naranja\), cable de relé \(amarillo\) |
| GNSS | Antena GPS integrada; precisión de posicionamiento 2D ≈10 m \(RM\); inicio en frío ≈38 s, cálido ≈32 s, caliente ≈2 s \(cielo abierto\) |
| Indicadores | LED rojo: alimentación; LED azul: señal GSM \(lleno=no GSM, parpadeo=normal, rápido=TX\); LED amarillo: estado GPS \(fijo sólido=no fix, parpadeo=fijo válido\) |
| Alarmas y Alertas | Geocerca, alarma por exceso de velocidad y seguimiento en tiempo real; inmovilización remota por relé |
| Ambiental | Temperatura de operación -20°C a +70°C; humedad relativa 20%–80% |
| Factor de Forma | Compacto: aprox. 76 × 26 × 19 mm — diseñado para instalación en vehículos/motocicletas |
| Configuración | Controles por SMS/comando para IMEI, configuración de servidor/APN/GMT, reseteo de fábrica y consultas de ubicación \(p. ej., WHERE#\) |

## Casos de uso

- Gestión de flotas: monitorizar la ubicación del vehículo, el estado de encendido y los eventos de exceso de velocidad para optimizar rutas y garantizar el cumplimiento.
- Antirrobo y recuperación: colocación de rastreador GPS oculto para coche con inmovilización por relé para apagado remoto y flujos de recuperación.
- Localización de motocicletas: su tamaño compacto y la amplia compatibilidad de tensión lo hacen adecuado como localizador discreto para motos.
- Telemetría básica: utilice datos de posición, velocidad y encendido en los paneles de Plaspy para visión operativa.
- Control de alquiler y activos: alertas de geocerca e inmovilizador remoto ayudan a hacer cumplir acuerdos de alquiler y recuperar activos.

## Por qué elegir este rastreador con Plaspy

Elegir el TS-G17H para la integración con Plaspy proporciona un rastreador GPS rentable y fiable que admite las características clave que requieren flotas y propietarios: seguimiento en tiempo real, informes de telemetría, detección de encendido e inmovilización por relé. Su compatibilidad con el protocolo GT06 y la conectividad GPRS TCP/IP permiten una rápida incorporación a la infraestructura del servidor de Plaspy, y su amplia tolerancia de voltaje y su formato compacto simplifican la instalación en automóviles, camiones y motocicletas.

Para operadores centrados en un seguimiento fiable y un control remoto sencillo, el TS-G17H se integra bien con las herramientas de mapas, alertas e informes de Plaspy, proporcionando inteligencia accionable sobre los vehículos sin complejidad innecesaria. Ya sea que su prioridad sea la gestión de flotas, la protección antirrobo o flujos de trabajo básicos de combustible/telemetría cuando se combina con sensores externos, el TS-G17H ofrece una base estable para implementaciones habilitadas para Plaspy.


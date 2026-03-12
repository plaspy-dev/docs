---
slug: /cantrack/tk100
id: tk100
sidebar_label: TK100
sidebar_class_name: menu_item_tracker
---
# CanTrack - TK100

![TK100](./tracker.jpg)

El TK100 \(GT06\) es un rastreador GPS para vehículos cableado, diseñado para posicionamiento confiable y continuo y control remoto. Compatible con Plaspy desde el primer uso, el TK100 utiliza señales GSM/GPRS y GPS para entregar seguimiento en tiempo real y telemetría a endpoints de servidor y de la aplicación móvil. Construido para instalación en vehículos, reporta ubicación, velocidad, estado de encendido y eventos de alarma, además de ofrecer capacidades anti-robo como inmovilización remota del motor y reporte de alarma SOS.

Construido para la gestión de flotas, talleres de servicio de automóviles, seguimiento de seguros y aplicaciones anti-robo para motocicletas/e‑bikes, el TK100 funciona con 9–36 V DC y es lo suficientemente compacto como para una instalación discreta. Su soporte para carga GPRS, informes por SMS y comandos remotos facilita su integración con Plaspy para paneles centrales de flota, alertas y análisis histórico, proporcionando a los operadores datos de ubicación confiables y telemetría accionable sin configuración compleja.

## Aspectos destacados

- Rastreador GPS compatible con Plaspy para seguimiento en tiempo real y gestión centralizada de la flota.
- Diseño cableado \(9–36 V DC\) adecuado para automóviles, camiones y motocicletas.
- Inmovilización remota del motor y control del combustible/circuito por SMS para respuesta anti-robo.
- Informes por GPRS o SMS al servidor y/o aplicación para telemetría continua y registro histórico.
- Detección de encendido \(ACC\) y velocidad reportados para el comportamiento del conductor y la segmentación de trayectos.
- Alerta de fallo de alimentación y batería de respaldo de 200 mAh para detectar manipulaciones y cortos.
- Botón de SOS de emergencia y llamadas de voz bidireccionales para la seguridad del conductor y la respuesta ante incidentes.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el TK100 transmite la posición del vehículo y los datos de eventos a través de GPRS \(TCP/IP\) o envía alertas por SMS a los endpoints de Plaspy, lo que permite vistas en mapa en tiempo real, notificaciones automáticas e informes de la flota. Plaspy ingiere la telemetría del rastreador para que los operadores puedan combinar ubicación GPS, estado de encendido, velocidad y eventos de alarma en paneles, reproducción histórica y reglas de alerta personalizadas para una gestión de flota eficiente y flujos de anti-robo.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas vía GPRS \(TCP/IP\) o SMS a los servidores de Plaspy.
- Estado de encendido \(ACC\) y velocidad reportados para el comportamiento del conductor y la segmentación de trayectos.
- Alertas de geocerca y alarmas de sobrevelocidad dirigidas a Plaspy para notificación inmediata.
- Inmovilizador remoto / control del circuito de combustible mediante comandos SMS para intervención anti-robo.
- Informes de SOS/emergencia y soporte de llamadas de voz bidireccionales para la escalada de seguridad.
- Detección de corte de energía \(desconexión de la batería\) e informe de la batería de respaldo para detectar manipulaciones.
- Nota: Plaspy puede correlacionar los datos del TK100 con otras fuentes de telemetría, como monitoreo de combustible dedicado o sensores Bluetooth, si esas entradas están disponibles desde el hardware o gateways integrados.

## Visión técnica

| Conectividad | GSM/GPRS \(GPRS Clase 12, TCP/IP\); informes por SMS |
| --- | --- |
| Bandas | Quad-band GSM 850 / 900 / 1800 / 1900 MHz |
| Potencia y batería | Rango de tensión de funcionamiento 9–36 V DC; corriente de funcionamiento 5–50 mA; batería interna de respaldo 200 mAh / 3.7 V de litio manganeso; modo de espera ≈1 hora |
| Interfaces | Estado de encendido \(ACC\) de entrada, corte remoto del motor \(corte de aceite/circuito vía SMS\), botón SOS, llamadas de voz bidireccionales, informes de alarma |
| GNSS | Conjunto de chips GPS MT6261 + RDA6625e; GPS L1 1575.42 MHz C/A code; receptor de 66 canales; precisión de ubicación \<10 metros; sensibilidad de captura -165 dBm; TTFF Hot ≤1 s, Cold ≤32 s |
| Memoria y rendimiento de radio | Memoria 32 + 32 Mb; potencia de transmisión GSM850/900: 33±3 dBm; GSM1800/1900: 30±3 dBm; sensibilidad de recepción Clase II RBER2% \(-102 dBm\) |
| Bluetooth | No especificado en la descripción del producto |
| Gestión remota | Configuración remota vía SMS y GPRS; funciones de restablecimiento remoto de parámetros/firmware soportadas |
| Indicadores y antenas | Antena GSM integrada de cuatro bandas y antena GPS cerámica; indicadores LED para Alimentación \(Rojo\), GSM \(Verde\) y GPS \(Azul\) |
| Factor de forma y entorno | Unidad cableada compacta, 90 x 49.3 x 16.7 mm; peso 50 g; temperatura de operación -20°C a +70°C |

## Casos de uso

- Gestión de flotas: despacho en tiempo real, reproducción de rutas y supervisión del comportamiento del conductor mediante paneles de Plaspy.
- Protección anti robo: inmovilización remota, alertas SOS y alertas de corte de energía para una rápida recuperación de vehículos robados.
- Talleres de servicio de vehículos y seguros: instalación para el registro de kilometraje, incidencias y apoyo en la recuperación ante robos.
- Seguridad para motocicletas y bicicletas eléctricas: instalación cableada compacta con posicionamiento discreto y alertas de manipulación.
- Telemetría a demanda para camiones y vehículos de reparto: control de geocercas y alertas de sobrevelocidad para el control operativo.

## Por qué elegir este rastreador con Plaspy

Combinar el TK100 con Plaspy ofrece una solución práctica y de bajo costo para operadores que necesitan un seguimiento en tiempo real fiable, telemetría integrada y controles anti-robo directos. El diseño cableado del TK100 y su amplio rango de tensión de entrada facilitan la instalación en diversas flotas de vehículos, mientras que los informes por GPRS y SMS aseguran que los datos lleguen a Plaspy incluso cuando las condiciones de la red varían. Plaspy transforma la posición, el estado de encendido y los eventos de alarma del TK100 en mapas en vivo, alertas e informes históricos que escalan desde un solo vehículo hasta despliegues de flotas grandes.

Para gerentes de flota y proveedores de servicios centrados en la confiabilidad y los datos accionables, el TK100 ofrece las características centrales de un rastreador GPS: seguimiento en tiempo real, telemetría, monitoreo de encendido y control del inmovilizador, mientras que Plaspy proporciona la plataforma para alertas, análisis y flujos de trabajo operativos. Juntos ofrecen un enfoque integrado y seguro para la gestión de la flota, la respuesta ante robos y la monitorización de vehículos, sin complejidad innecesaria.


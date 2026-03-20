---
slug: /istartek/vt120_l/protocol
id: vt120_l-protocol
sidebar_label: Protocol
title: iStartek - VT120-L Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo iStartek VT120-L y cómo se comunica con Plaspy para seguimiento confiable de flotas
keywords:
  - iStartek VT120-L
  - protocolo VT120-L
  - protocolo rastreador GPS iStartek
  - protocolo GPS VT120-L
  - compatibilidad VT120-L con Plaspy
  - protocolo de rastreo iStartek
  - rastreo vehicular VT120-L
  - protocolo de dispositivo Plaspy
  - protocolo de telemetría VT120-L
  - rastreador GPS VT120-L
---

# iStartek - Protocolo VT120-L

Esta página explica, en términos públicos y no sensibles, el contexto del protocolo para usar el iStartek VT120-L con Plaspy. El objetivo es que integradores y gestores de flota comprendan cómo el protocolo del dispositivo facilita una implementación fiable, sin entrar en detalles de implementación propietarios.

El VT120-L es un rastreador GPS compacto y compatible con Plaspy que envía posición GNSS, telemetría y eventos de alarma a través de redes móviles. Plaspy utiliza ajustes de conexión compartidos para dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Use esta página como orientación sobre el protocolo y consulte al fabricante del dispositivo para detalles específicos de firmware.

## Resumen del protocolo

El protocolo del rastreador es el método estándar que usa el dispositivo para reportar posiciones GNSS, estado y alarmas a un servidor remoto. En el caso del VT120-L, el protocolo permite que el equipo se identifique ante Plaspy, envíe mensajes con ubicaciones y telemetría almacenada, y soporte funciones de gestión remota que mejoran la fiabilidad operativa.

- Entregar datos de posición GNSS y de tiempo al servidor para que Plaspy muestre ubicación en tiempo real y reproducción histórica.
- Reportar telemetría y eventos de estado del vehículo como encendido ACC, disparos de alarma y kilometraje para análisis.
- Almacenar datos durante cortes de red y subir los registros guardados para asegurar la continuidad de la ruta cuando se restablece la conectividad.
- Soportar flujos de gestión remota como actualizaciones de firmware y cambios de configuración cuando el fabricante lo implemente.
- Ofrecer opciones de entrega redundante mediante el diseño de carga a dos servidores para aumentar la probabilidad de recepción correcta de datos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe las conexiones entrantes de los dispositivos en un punto de acceso compartido y reconoce automáticamente el protocolo de reporte usado por los rastreadores soportados. En configuraciones estándar, un VT120-L correctamente apuntado al endpoint de Plaspy comenzará a reportar sin requerir selección manual de protocolo dentro de la plataforma.

- Plaspy acepta tráfico de dispositivos en el dominio d.plaspy.com y en la IP de servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de servidor, lo que simplifica la configuración y el ingreso de dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de los reportes entrantes, por lo que normalmente no es necesario seleccionar el protocolo manualmente.
- Si el dispositivo está configurado para apuntar al endpoint de Plaspy y utiliza el transporte correcto, la plataforma podrá parsear e ingerir mensajes de posición y telemetría.
- Para solucionar problemas, confirme que el dispositivo apunta al dominio o IP de Plaspy y que la conectividad de datos móviles saliente está activa.

## Transporte y contexto de conexión

La selección de transporte es una configuración del dispositivo e influye en cómo el VT120-L entrega datos a Plaspy. El VT120-L puede configurarse para usar UDP o TCP según el firmware y la preferencia del instalador, y soporta apuntar a un nombre DNS o a una dirección IP directa del servidor.

- El VT120-L puede configurarse para usar UDP o TCP en el puerto 8888 para reportar datos a Plaspy.
- Los dispositivos pueden dirigir sus reportes al servidor Plaspy por dominio d.plaspy.com o por la IP directa 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, lo que simplifica el aprovisionamiento a escala de flota.
- Elija UDP para menor sobrecarga y latencia en redes con pérdidas, o TCP cuando se prefiera un transporte orientado a conexión según el firmware del dispositivo.
- Verifique que el APN y los ajustes de datos móviles del dispositivo estén correctos para que las conexiones salientes al endpoint de Plaspy funcionen.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el tiempo de envío, campos opcionales y comandos remotos soportados; siempre verifique las notas de la versión de firmware para matices del protocolo.
- Revisiones de hardware o variantes regionales pueden alterar el comportamiento de E/S disponible o los intervalos de reporte soportados.
- La elección del transporte (UDP versus TCP) afecta las características de entrega pero no cambia el propósito general del protocolo de reporte.
- El VT120-L soporta carga a dos servidores, lo que mejora la redundancia; confirme que ambos objetivos de servidor estén configurados si usa las opciones de redundancia del fabricante.
- Las herramientas de configuración del fabricante pueden ofrecer entrada por DNS o IP directa; apuntar el dispositivo a d.plaspy.com o 54.85.159.138 con puerto 8888 es el enfoque estándar de Plaspy.
- Valide cualquier middleware de terceros o ajustes del proveedor de SIM que puedan modificar el tráfico saliente, como proxy o comportamientos NAT.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el VT120-L ayuda a lograr un ingreso confiable, telemetría precisa y una resolución de problemas más fluida al integrarlo con Plaspy. Un contexto claro del protocolo reduce el tiempo empleado en diagnosticar conectividad e interpretación de datos, y favorece mejores resultados operativos a largo plazo.

- Garantiza la configuración correcta del servidor y del transporte para que el dispositivo reporte con éxito a Plaspy.
- Facilita la resolución de reportes intermitentes distinguiendo causas de red, transporte y firmware del dispositivo.
- Informa sobre el comportamiento de subida bufferizada y cómo se recuperan las rutas históricas tras cortes.
- Orienta la decisión sobre la selección de transporte según el entorno de la flota o el plan de SIM.
- Permite confirmar que funciones del dispositivo como reporte ACC, alarmas y actualizaciones remotas se integren en los flujos de trabajo de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el VT120-L con Plaspy ofrece a flotas y equipos de seguridad una entrega confiable de ubicación, telemetría y alertas en un formato compacto apto para vehículos. La detección automática de protocolos de Plaspy y la configuración de servidor compartida reducen la carga de configuración, de modo que las instalaciones pueden escalar con mayor eficiencia entre vehículos y técnicos.

Para obtener más información sobre Plaspy y cómo maneja la conectividad de dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, comportamiento de firmware y notas del fabricante, verifique la información en el sitio oficial de iStartek https://istartek.com/.

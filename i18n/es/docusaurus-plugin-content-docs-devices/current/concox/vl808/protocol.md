---
slug: /concox/vl808/protocol
id: vl808-protocol
sidebar_label: Protocol
title: Concox - VL808 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo Concox VL808 y su comunicación con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - protocolo Concox VL808
  - protocolo GPS Concox VL808
  - protocolo de seguimiento VL808
  - compatibilidad rastreador Concox Plaspy
  - protocolo de comunicación VL808
  - protocolo de dispositivo Plaspy
  - seguimiento vehicular VL808
  - seguimiento de flotas VL808
  - integración Concox Plaspy
  - protocolo GNSS VL808
---

# Concox - Protocolo VL808

Esta página ofrece un contexto público sobre el protocolo utilizado por el Concox VL808 para integrarse con la plataforma Plaspy. Describe de forma general cómo se comunica el VL808, qué tipos de datos ingiere Plaspy y cuáles son los ajustes de conexión compartidos que permiten a los equipos técnicos planificar instalaciones y resolver problemas con confianza.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta a la plataforma. El VL808 puede configurarse para enviar datos a Plaspy usando el endpoint d.plaspy.com o la IP 54.85.159.138 en el puerto 8888. Los dispositivos pueden usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo; Plaspy acepta conexiones en el mismo puerto para todos los dispositivos y gestiona la detección del protocolo de forma automática. El comportamiento exacto del protocolo puede variar según el firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene confirmar detalles específicos del dispositivo cuando sea necesario.

## Visión general del protocolo

El protocolo de comunicación del VL808 define las reglas que el dispositivo usa para enviar posiciones GNSS, telemetría y eventos a una plataforma remota como Plaspy. Para la integración con Plaspy, el protocolo permite que el rastreador se identifique, entregue actualizaciones de ubicación periódicas y por eventos, y transmita telemetría de entradas/salidas y sensores que Plaspy puede convertir en alertas e informes.

- Permite el reporte de posiciones GNSS y actualizaciones de ubicación con marca de tiempo para seguimiento en tiempo real e histórico.
- Transmite eventos del acelerómetro y estados de entradas/salidas digitales y analógicas para que Plaspy muestre comportamiento de conducción y telemetría de sensores.
- Transporta datos de accesorios BLE y periféricos cuando el dispositivo está configurado para reenviar esas entradas a la plataforma.
- Provee un mecanismo de identificación del dispositivo y reporte de estado básico para que Plaspy asocie los mensajes entrantes con el activo correcto.
- Soporta reportes periódicos y mensajes por eventos para equilibrar uso de datos y capacidad de respuesta en despliegues de flotas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador que usa el dispositivo. Cuando el VL808 apunta a Plaspy, la plataforma asocia el flujo entrante con un dispositivo y aplica el análisis y enrutamiento adecuados sin que el usuario tenga que seleccionar el protocolo manualmente.

- Plaspy escucha en el puerto 8888 para todos los dispositivos y protocolos soportados.
- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a 54.85.159.138 como destino.
- Plaspy soporta tanto TCP como UDP, por lo que el VL808 puede usar el transporte que coincida con la configuración de su firmware.
- Si el dispositivo está correctamente configurado para enviar al endpoint de Plaspy, la selección manual del protocolo en la plataforma suele ser innecesaria.
- La detección automática simplifica el despliegue en flotas mixtas y en entornos con múltiples revisiones de hardware.

## Transporte y contexto de conexión

El contexto de conexión se centra en cómo el VL808 alcanza Plaspy más que en los detalles internos de los paquetes. El dispositivo soporta datos celulares para reportes continuos y puede caer a GSM cuando no hay cobertura LTE. Para la integración con Plaspy, los detalles importantes son el endpoint compartido del servidor y las opciones de transporte que soporta el rastreador.

- Los dispositivos pueden usar TCP o UDP en el puerto 8888 según la configuración y capacidades del firmware del VL808.
- El dominio del servidor Plaspy para reportes es d.plaspy.com y la IP pública es 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de firewall y APN al tener un destino de salida consistente.
- Elija el tipo de transporte que mejor se ajuste a la estabilidad de su red y requisitos de datos; algunas instalaciones prefieren UDP por su menor sobrecarga y otras prefieren TCP por su entrega más fiable.
- Asegúrese de configurar correctamente el APN y los ajustes celulares en el dispositivo para que pueda establecer una sesión de datos y alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos soportados y las funciones opcionales; valide las capacidades del protocolo frente al nivel de firmware del dispositivo en uso.
- Las revisiones de hardware y las variantes regionales pueden alterar las bandas celulares soportadas o las líneas de E/S disponibles, lo que afecta la telemetría que llega a Plaspy.
- El VL808 soporta accesorios BLE y múltiples tipos de E/S; confirme si datos de accesorios específicos se reenvían en la versión de firmware de su dispositivo.
- La selección de transporte entre UDP y TCP puede estar limitada por el firmware, así que configure el VL808 conforme al transporte que planea usar con Plaspy.
- El comportamiento de registro offline y la sincronización de datos después de la reconexión pueden depender de las configuraciones y del firmware del dispositivo; verifique los límites de registro del VL808 para su caso de uso.
- Siempre contraste la documentación del fabricante por notas específicas de firmware que afecten el comportamiento del protocolo o los tipos de mensaje disponibles.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a integradores de sistemas y técnicos de flotas a garantizar un reporte confiable, un diagnóstico preciso y estabilidad operacional a largo plazo al usar el VL808 con Plaspy. Tener claro qué envía el dispositivo y cómo se conecta reduce la fricción en el despliegue y acelera la resolución de problemas.

- Garantiza la configuración correcta del dispositivo para que el VL808 apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando el transporte deseado.
- Facilita la interpretación de logs y eventos durante la puesta en marcha y al diagnosticar conectividad intermitente.
- Orienta la selección y estrategia de actualización de firmware para habilitar telemetría requerida como periféricos BLE, eventos del acelerómetro o entradas analógicas.
- Reduce la necesidad de selección manual del protocolo en Plaspy confirmando que el dispositivo está configurado para reportar al endpoint compartido.
- Ayuda a planear cambios de red, comportamiento en roaming y la configuración de APN en despliegues celulares.

## Por qué usar Plaspy con este protocolo

Combinar el Concox VL808 con Plaspy ofrece a las organizaciones visibilidad en tiempo real y la capacidad de convertir datos GNSS y de sensores en información operativa. La precisión multi GNSS del VL808, su conjunto robusto de E/S y su registro offline lo hacen adecuado para monitoreo de flotas, flujos antirobo, telemetría de combustible y batería, y análisis de comportamiento de conducción cuando se integra en Plaspy.

El enfoque de conexión compartida de Plaspy simplifica despliegues a escala de flota al usar el mismo puerto para todos los dispositivos y detectar automáticamente el protocolo del rastreador cuando el dispositivo reporta a d.plaspy.com o 54.85.159.138 en el puerto 8888. Para saber más sobre Plaspy y cómo puede trabajar con dispositivos como el VL808 visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo, el comportamiento del firmware y las notas de implementación del fabricante en https://www.iconcox.com/ ya que estos elementos pueden cambiar con el tiempo.

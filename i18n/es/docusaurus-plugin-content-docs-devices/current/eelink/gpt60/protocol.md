---
slug: /eelink/gpt60/protocol
id: gpt60-protocol
sidebar_label: Protocol
title: EElink - GPT60 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el EElink GPT60 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo EElink GPT60
  - protocolo GPS EElink GPT60
  - compatibilidad EElink GPT60 con Plaspy
  - protocolo EELINK 2.1
  - protocolo de rastreo GPT60
  - protocolo de comunicación GPT60
  - guía de protocolo para rastreadores GPS
  - integración de localizadores personales con Plaspy
  - rastreador GNSS WiFi LBS
  - rastreo de activos portátiles con Plaspy
---

# EElink - Protocolo GPT60

Esta página documenta el contexto público del protocolo para usar el rastreador EElink GPT60 con la plataforma Plaspy. Explica de forma general cómo se comunica el dispositivo, cómo Plaspy recibe los reportes y qué debe verificar usted al configurar un GPT60 para enviar telemetría, alertas y estado de voz bidireccional a Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo en el GPT60 puede variar según revisiones de firmware, variantes de hardware y detalles de implementación del fabricante; por ello esta página se enfoca en orientaciones públicas seguras y consideraciones prácticas de compatibilidad en lugar de en detalles internos propietarios.

## Resumen del protocolo

El GPT60 combina sus receptores GNSS integrados con Wi Fi y LBS como alternativas para generar posiciones y telemetría de eventos. La telemetría, las alertas y los flujos de configuración remota utilizan el protocolo que soporta el fabricante y Plaspy consume esos datos para mapas, notificaciones e historial. Esta sección destaca el papel del protocolo sin entrar en tramas propietarias ni detalles privados del parser.

- Permite al GPT60 enviar actualizaciones de posición, estado de batería, eventos SOS y de caída, y telemetría básica de sensores a Plaspy.
- Transporta la identidad del dispositivo y la información de sesión que permite a Plaspy atribuir los reportes al registro de dispositivo correcto.
- Soporta la generación en el dispositivo de eventos de geocerca, activaciones SOS y alertas por vibración que se entregan a Plaspy para notificaciones y manejo de flujos de trabajo.
- Permite la configuración remota y la actualización de parámetros desde Plaspy hacia el dispositivo cuando existen comandos soportados por el fabricante, incluida la capacidad EELINK 2.1 indicada por el fabricante.
- Proporciona un flujo consistente de telemetría con marcas de tiempo para los mapas de Plaspy, reproducción del historial e investigación de incidentes.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes entrantes de los dispositivos en un endpoint compartido y asocia automáticamente el flujo entrante con un protocolo de rastreador soportado. En la mayoría de los casos usted no necesita seleccionar el protocolo manualmente dentro de Plaspy si el GPT60 está configurado para enviar al endpoint de Plaspy y utiliza un transporte compatible.

- Plaspy escucha en un único puerto compartido el tráfico de dispositivos y detecta automáticamente el protocolo del rastreador según los reportes entrantes.
- Los dispositivos deben configurarse para reportar a la dirección del servidor d.plaspy.com o al IP equivalente 54.85.159.138.
- El puerto habitual de escucha de Plaspy es el 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- Plaspy acepta reportes tanto por UDP como por TCP cuando esos transportes son usados por el rastreador.
- Cuando un GPT60 apunta correctamente al endpoint de Plaspy, Plaspy intenta reconocer el protocolo del fabricante y enrutar los datos al registro de dispositivo apropiado sin intervención adicional del usuario.

## Transporte y contexto de conexión

Las elecciones de conexión afectan cómo el GPT60 llega al endpoint de Plaspy, pero no cambian el papel público del protocolo en sí. El GPT60 puede usar redes celulares como enlace principal y recurrir a Wi Fi o LBS para ubicación, mientras que el transporte hacia Plaspy suele ser TCP o UDP en el puerto compartido.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware del equipo y la preferencia del cliente.
- Configure el rastreador para apuntar a d.plaspy.com o al IP 54.85.159.138 si DNS no está disponible en su implementación.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que las reglas de firewall y NAT pueden simplificarse abriendo ese único puerto saliente para el tráfico de los rastreadores.
- Consideraciones de transporte como keepalive de NAT y el comportamiento de los operadores celulares pueden afectar la fiabilidad de la conexión, pero son independientes del contenido del protocolo.
- Verifique que el firmware del dispositivo soporte el transporte elegido y que la APN del operador y los ajustes de red sean correctos para el GPT60.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los comandos disponibles, los formatos de eventos y las capacidades de configuración remota del GPT60; siempre verifique la versión de firmware del equipo al validar el comportamiento.
- Revisiones de hardware o variantes SKU pueden modificar la disponibilidad de sensores como micrófono, altavoz o Bluetooth, lo que afecta lo que se reporta a Plaspy.
- El GPT60 anuncia soporte para el protocolo EELINK 2.1 para configuración remota y telemetría; utilice la documentación del fabricante para confirmar los conjuntos de comandos y parámetros esperados.
- Seleccionar UDP frente a TCP puede afectar la semántica de entrega para alarmas y el reporte del estado de voz bidireccional; elija el transporte que mejor se ajuste a sus necesidades operativas de fiabilidad.
- Pruebe el firmware nuevo en un conjunto controlado de dispositivos antes de un despliegue masivo para asegurar que eventos como SOS, alertas de caída y disparos de geocerca se comporten como se espera en Plaspy.
- En caso de duda, valide el comportamiento contra la documentación oficial del fabricante y ejemplos de salida en lugar de basarse en suposiciones sobre internals del protocolo.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del GPT60 ayuda a administradores e integradores a configurar correctamente los dispositivos, diagnosticar problemas y asegurar que las alertas y la telemetría lleguen a Plaspy como se espera. Saber qué funciones transporta el protocolo y cómo el dispositivo las envía reduce el tiempo de configuración y mejora la fiabilidad operativa.

- Asegura que servidor, transporte e intervalos de reporte estén configurados correctamente para que las actualizaciones aparezcan en Plaspy de manera oportuna.
- Ayuda a diagnosticar eventos faltantes como SOS o alertas de caída al acotar el problema a configuración de red, ajustes de firmware o estado del dispositivo.
- Permite tomar decisiones informadas sobre modos de energía y frecuencia de reporte para balancear la vida de batería con la precisión posicional en Plaspy.
- Aclara cómo los eventos generados por el dispositivo se mapean a las alertas de Plaspy y qué campos de datos son necesarios para flujos de trabajo y notificaciones.
- Facilita pruebas y validación seguros de actualizaciones de firmware y cambios de configuración remota antes de un despliegue amplio.

## Por qué usar Plaspy con este protocolo

Usar el GPT60 con Plaspy ofrece una solución práctica para organizaciones que necesitan monitoreo confiable de seguridad personal y telemetría de activos portátiles. El dispositivo combina posicionamiento GNSS, Wi Fi y LBS con voz bidireccional, SOS y detección de caídas, mientras que Plaspy agrega esos reportes en mapas, historiales, alertas y flujos operativos para que los equipos puedan actuar.

El enfoque de endpoint único de Plaspy simplifica la incorporación de dispositivos al usar los ajustes de servidor compartidos y la detección automática del protocolo, de modo que las unidades GPT60 pueden comenzar a reportar con mínima configuración manual. Para conocer más sobre cómo Plaspy maneja los datos entrantes de dispositivos y revisar funciones de la plataforma visite https://www.plaspy.com. Para detalles más actuales del protocolo del dispositivo, notas de firmware y orientación del fabricante confirme la información con EElink en https://www.eelink.com.cn/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

---
slug: /aplicom/a9_quick/protocol
id: a9_quick-protocol
sidebar_label: Protocol
title: Aplicom - A9 Quick Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Aplicom A9 Quick con Plaspy, con detalles de conexión, compatibilidad y guía práctica de integración
keywords:
  - protocolo Aplicom A9 Quick
  - Aplicom A9 Quick GPS
  - compatibilidad Aplicom A9 Quick Plaspy
  - protocolo rastreador GPS Aplicom
  - protocolo de comunicación A9 Quick
  - rastreo de vehículos Aplicom
  - protocolo de rastreo A9 Quick
  - rastreadores compatibles con Plaspy
  - telemetría A9 Quick
  - protocolo de rastreo Aplicom
---

# Aplicom - Protocolo A9 Quick

Esta página ofrece una visión pública y de alto nivel del contexto del protocolo de comunicación del Aplicom A9 Quick cuando se utiliza con la plataforma de flotas Plaspy. Explica cómo el equipo suele reportar posiciones y eventos a Plaspy y señala consideraciones prácticas para la integración, sin exponer detalles propietarios o sensibles de implementación.

El Aplicom A9 Quick es una unidad telemática portátil para vehículos diseñada para instalación rápida y uso flexible. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento concreto del protocolo puede variar según versiones de firmware, revisiones de hardware y decisiones del fabricante. Esta página se centra en información segura y útil sobre el protocolo e indica la documentación del fabricante para detalles específicos del dispositivo.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de reglas que sigue el A9 Quick para enviar datos de ubicación, estado y eventos a un servidor remoto. En despliegues con Plaspy, este protocolo permite que la unidad se identifique, reporte datos GPS y de sensores, y comunique entradas del conductor o eventos de geocerca para que la plataforma los procese y presente información accionable.

- Permite el envío de posiciones GPS y GLONASS, y métodos de ubicación alternativos como Cell ID cuando están soportados.
- Transmite eventos de sensores, incluyendo detección de movimiento basada en acelerómetro y eventos de activación que la plataforma puede mapear a incidentes.
- Genera notificaciones de entrada y salida de geocercas creadas por el dispositivo según polígonos, círculos o rectángulos configurados.
- Soporta interacciones de usuario, como pulsaciones de botones del teclado Aplicom 3PAD para casos de uso de registro de conductor o reportes.
- Envía mensajes de estado y latidos (heartbeats) para que la plataforma pueda monitorear la conectividad del dispositivo y el comportamiento de la batería auxiliar.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint compartido y determina automáticamente qué protocolo de rastreador está utilizando cada equipo. Para la mayoría de los usuarios esto implica una configuración manual mínima dentro de Plaspy una vez que el dispositivo apunte al servidor Plaspy y empiece a enviar telemetría.

- Plaspy usa un único endpoint de servidor accesible en d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador cuando llegan datos.
- Si el A9 Quick está configurado para reportar al endpoint de Plaspy, por lo general no es necesario seleccionar un protocolo manualmente en Plaspy.
- Una configuración correcta en el lado del dispositivo (dirección de servidor, tipo de transporte y cualquier ajuste APN requerido) asegura que el proceso de detección automática pueda completarse.
- La detección automática facilita la incorporación en flotas mixtas que incluyen el A9 Quick junto con otros modelos de rastreadores.

## Transporte y contexto de conexión

El contexto de conexión abarca el protocolo de transporte y la dirección usados para entregar los mensajes del rastreador a Plaspy. El A9 Quick puede configurarse para usar UDP o TCP según las capacidades y ajustes del dispositivo; ambos modos de transporte son compatibles con el endpoint de Plaspy.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y las elecciones de configuración del equipo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP pública 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración de firewalls y redes.
- Asegúrese de que la SIM o la red conectada provea salida de datos IP para alcanzar el endpoint de Plaspy y que cualquier firewall intermedio permita el transporte elegido.
- Para unidades móviles plug and play como el A9 Quick es común verificar la conectividad confirmando que el dispositivo puede alcanzar d.plaspy.com y que los mensajes aparecen en Plaspy una vez que comienza el reporte inicial.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué funciones reporta la unidad y cómo se codifican los eventos. Verifique la versión de firmware al diagnosticar problemas.
- Las revisiones de hardware y accesorios opcionales, como el teclado 3PAD, pueden modificar las entradas disponibles o los tipos de eventos que el rastreador puede enviar.
- Los perfiles de configuración del fabricante o modos preconfigurados (por ejemplo, funcionalidades preconfiguradas A9 NEX) pueden afectar la forma en que el dispositivo se comunica desde fábrica.
- La elección de UDP frente a TCP influye en las características de entrega, pero no en el hecho de que Plaspy recibe datos en el mismo puerto compartido.
- Siempre valide la compatibilidad de funciones específicas, como formas de geocerca, umbrales del acelerómetro o reportes de conductor, según la documentación más reciente de Aplicom.
- En caso de dudas, pruebe un dispositivo en un entorno controlado para confirmar los eventos esperados y la cadencia de reporte antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo del dispositivo ayuda al personal técnico e integradores a que el A9 Quick funcione de manera confiable con Plaspy y reduce el tiempo dedicado a resolver problemas de conectividad o mapeo de datos.

- Acelera la configuración inicial asegurando que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 y use el puerto 8888.
- Ayuda a identificar si un problema es de transporte (UDP versus TCP) o provocado por diferencias de firmware en el dispositivo.
- Aclara qué eventos del dispositivo aparecerán en Plaspy y cómo interpretar mensajes del acelerómetro o de geocercas.
- Facilita la validación de reportes de entradas de conductor desde el Aplicom 3PAD y otros accesorios opcionales.
- Apoya la planificación para operación a largo plazo, incluida la gestión de respaldo de batería, uso de memoria y estrategias de actualización de firmware.

## Por qué usar Plaspy con este protocolo

Usar el Aplicom A9 Quick con Plaspy combina un rastreador portátil y compacto con una plataforma diseñada para aceptar datos rastreados en un endpoint único y consistente. Ese modelo de conexión compartida y la detección automática de protocolo reducen la fricción de configuración para flotas que necesitan despliegues rápidos y rotación sencilla de dispositivos entre vehículos.

Si desea conocer más sobre cómo Plaspy maneja la conectividad de dispositivos y los datos de flota puede visitar https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y la guía de implementación más reciente, verifique la información actual en el sitio del fabricante https://www.aplicom.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

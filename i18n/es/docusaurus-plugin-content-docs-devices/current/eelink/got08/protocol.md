---
slug: /eelink/got08/protocol
id: got08-protocol
sidebar_label: Protocol
title: EElink - GOT08 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas sobre el protocolo del rastreador OBD EElink GOT08 y cómo comunica ubicación y telemetría con Plaspy
keywords:
  - protocolo EElink GOT08
  - protocolo GOT08 GPS
  - EElink GOT08 Plaspy
  - protocolo de comunicación GOT08
  - protocolo de rastreo GOT08
  - protocolo rastreador GPS EElink
  - rastreador OBD GPS Plaspy
  - rastreo de vehículos GOT08
  - gestión de flotas GOT08
  - compatibilidad rastreador Plaspy
---

# EElink - Protocolo GOT08

Esta página describe el contexto público del protocolo para usar el rastreador OBD EElink GOT08 con Plaspy. Explica cómo el dispositivo reporta ubicación y telemetría OBD a Plaspy y qué ajustes de conexión se usan para el servicio. El contenido se centra en detalles de integración públicamente utilizables y expectativas operativas, más que en internos de firmware o definiciones propietarias de paquetes.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatible y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar a la plataforma. El comportamiento exacto respecto a intervalos de reporte, campos de telemetría e identificación del dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene verificar detalles específicos del equipo cuando sea necesario.

## Visión general del protocolo

El protocolo del GOT08 regula cómo el dispositivo se identifica, abre una sesión hacia un endpoint remoto y envía posición junto con telemetría derivada del OBD a un servidor. Para la integración con Plaspy, los aspectos públicos más importantes son cómo el rastreador localiza el endpoint de Plaspy y cómo envía sus informes regulares y señales de mantenimiento de conexión.

- La información de identificación y registro del dispositivo se incluye en los reportes iniciales para que el servidor pueda asociar los datos entrantes a una unidad concreta.
- Los reportes de ubicación contienen la posición GPS y marcas de tiempo para permitir el seguimiento en tiempo real y la reproducción histórica en Plaspy.
- La telemetría OBD del vehículo se envía junto con los datos de posición cuando está disponible, permitiendo a Plaspy mapear parámetros del motor y diagnósticos.
- Los reportes periódicos y las señales de keepalive ayudan al servidor a determinar el estado en línea del dispositivo y la puntualidad de los datos.
- En la práctica, para el uso con Plaspy el protocolo no depende de un transporte específico, funcionando sobre TCP o UDP según lo soporte el dispositivo y el operador.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de dispositivos en un único endpoint y puerto compartido y puede determinar automáticamente qué protocolo de rastreador está presentando datos. Cuando un GOT08 se configura para enviar reportes al endpoint de Plaspy, la plataforma asocia los flujos entrantes con el registro de dispositivo correspondiente sin que normalmente sea necesaria una selección manual del protocolo.

- Plaspy escucha el tráfico de dispositivos en el endpoint d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, por lo que la configuración es consistente entre modelos.
- Los equipos pueden configurarse para conectar vía UDP o TCP en el puerto 8888 según el dispositivo y las preferencias del operador.
- Cuando un dispositivo correctamente configurado reporta al endpoint de Plaspy, el sistema detecta automáticamente el protocolo del rastreador.
- Generalmente, usted no necesita elegir un protocolo dentro de Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy y está enviando reportes.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el GOT08 alcanza Plaspy y qué opciones de transporte están disponibles. Para la integración con Plaspy, los hechos públicos son sencillos: direccione el dispositivo al endpoint de Plaspy y use el puerto de reporte compartido que soporta la plataforma.

- Los dispositivos pueden configurarse usando UDP o TCP en el puerto 8888 según el firmware del equipo y el entorno de red.
- El rastreador puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 como endpoint alternativo.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración masiva y el despliegue.
- Ajustes de la red celular como APN y permisos del operador afectan si el rastreador puede alcanzar el endpoint de Plaspy desde el vehículo.
- Firewalls y NAT del operador pueden impactar la conectividad, por lo que valide el acceso saliente al puerto 8888 en la red escogida.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar campos de mensaje y comportamientos de reporte; revise las notas de la versión del firmware del dispositivo al diagnosticar problemas.
- Las revisiones de hardware a veces ajustan parámetros OBD disponibles o los tiempos de interfaz, lo que puede cambiar qué telemetría se reporta a Plaspy.
- Algunas configuraciones del fabricante permiten cambiar entre los transportes TCP y UDP; confirme qué transporte está configurado antes del despliegue.
- Las configuraciones por defecto del fabricante pueden apuntar a otro servidor; asegúrese de que el GOT08 esté configurado para usar el endpoint de Plaspy para una integración correcta.
- Verifique que el vehículo exponga los PIDs OBD deseados, ya que la telemetría disponible depende de la marca y modelo del vehículo.
- Pruebe un dispositivo de forma completa con Plaspy antes de desplegar una flota grande para confirmar compatibilidad y mapeo de campos de telemetría.

## Por qué entender el protocolo es importante

Tener un conocimiento práctico del protocolo de comunicación del GOT08 facilita la configuración, la resolución de problemas y el mantenimiento de un flujo de datos fiable hacia Plaspy. Saber qué envía el dispositivo y cómo se conecta reduce el tiempo de despliegue y ayuda a diagnosticar problemas de conectividad o de mapeo de telemetría.

- Configuración más rápida al comprobar que los ajustes de reporte del dispositivo coincidan con el endpoint y el transporte esperados por Plaspy.
- Resolución de problemas más sencilla al poder verificar si el dispositivo está alcanzando d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Mejor mapeo de telemetría porque puede comprobar qué parámetros OBD exponen el dispositivo y el vehículo.
- Despliegues de flota más predecibles al estandarizar firmware y opciones de transporte entre unidades.
- Planificación de mantenimiento más informada cuando se sabe que actualizaciones de firmware o cambios de hardware pueden afectar el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el GOT08 con Plaspy ofrece una vía rápida a la visibilidad de flotas gracias al factor de forma OBD plug and play del rastreador. Las organizaciones pueden beneficiarse de ubicación en tiempo real, historiales de viaje y telemetría OBD sin instalaciones complejas, lo que permite despliegues más rápidos y una supervisión operativa eficiente.

Plaspy centraliza los datos entrantes del GOT08 en una única plataforma donde se pueden aplicar de forma consistente alertas, geocercas y análisis históricos en una flota mixta. Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente del protocolo y del firmware del dispositivo con el fabricante en https://www.eelink.com.cn/.

---
slug: /jointech/jt705a/protocol
id: jt705a-protocol
sidebar_label: Protocol
title: Jointech - JT705A Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Jointech JT705A y cómo se comunica con Plaspy para seguimiento y telemetría de contenedores
keywords:
  - Protocolo Jointech JT705A
  - Rastreador GPS Jointech JT705A
  - Compatibilidad JT705A Plaspy
  - Comunicación rastreador Jointech
  - Protocolo rastreador contenedores
  - Protocolo rastreo GPS
  - Rastreador gestión de flotas
  - Monitorización contenedores JT705A
  - Integración JT705A
  - Protocolo seguimiento vehicular
---

# Jointech - Protocolo JT705A

Esta página documenta el contexto público del protocolo para usar el Jointech JT705A con Plaspy. Explica cómo el dispositivo informa la ubicación y el estado de un contenedor a Plaspy, detalla los ajustes de conexión compartidos que Plaspy espera y señala las consideraciones prácticas para integrar la telemetría JT705A en los flujos de trabajo de Plaspy.

Plaspy utiliza un único endpoint y puerto compartido para todos los dispositivos y detecta automáticamente el protocolo del rastreador cuando los equipos reportan a la plataforma. En términos públicos, las unidades JT705A pueden configurarse para enviar datos a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888. El dispositivo puede usar UDP o TCP en el puerto 8888 según la configuración y el soporte del equipo. El comportamiento exacto del protocolo y los detalles de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene revisar la documentación de Jointech para detalles específicos del equipo.

## Resumen del protocolo

A alto nivel, el protocolo de comunicación JT705A define cómo el rastreador se identifica ante un servidor remoto, reporta actualizaciones periódicas de posición y estado, y transmite eventos de alarma o manipulación. Para la integración con Plaspy, el protocolo proporciona los tipos de evento y campos necesarios para que la plataforma muestre la ubicación, la seguridad y el estado operativo en el monitoreo de contenedores.

- Permite al JT705A enviar coordenadas de ubicación y telemetría con marca de tiempo para seguimiento en tiempo real.
- Transmite eventos de manipulación, desprecintado, impacto y alarma que Plaspy presenta como alertas y en flujos de custodia.
- Proporciona identificación del dispositivo e indicadores de estado para que Plaspy pueda correlacionar mensajes con un activo específico.
- Soporta tanto reportes periódicos como mensajes impulsados por eventos para capturar condiciones normales y excepcionales.
- Permite transporte sobre sockets de red estándar para que el dispositivo alcance Plaspy en el endpoint compartido.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único puerto compartido las conexiones entrantes de dispositivos y está diseñado para reconocer y aceptar una variedad de formatos de reporte de rastreadores. Cuando un JT705A apunta al endpoint de Plaspy, la plataforma normalmente identifica el protocolo del dispositivo de forma automática, por lo que no suele ser necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy usa la dirección de servidor pública d.plaspy.com y la IP 54.85.159.138 como endpoints públicos para el reporte de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el alta de equipos.
- Los dispositivos pueden conectarse por TCP o UDP al puerto compartido; Plaspy acepta ambos tipos de transporte.
- Cuando un JT705A se configura para reportar al endpoint de Plaspy, la plataforma intenta detectar automáticamente el formato del mensaje entrante.
- Generalmente usted solo necesita configurar el JT705A para apuntar al endpoint y al tipo de transporte correctos; Plaspy se encarga de la identificación del protocolo.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el JT705A entrega mensajes a Plaspy y pueden afectar la fiabilidad de entrega y el comportamiento en la red. Plaspy expone ajustes de conexión públicos para que los integradores puedan configurar el envío de datos desde los equipos.

- Las unidades JT705A pueden configurarse para usar UDP o TCP en el puerto 8888 según las capacidades del dispositivo y las condiciones de la red.
- Los dispositivos pueden apuntar al nombre DNS d.plaspy.com o a la IP alternativa 54.85.159.138 para el enrutamiento directo.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados, haciendo que el mismo puerto sea universal entre modelos.
- TCP puede ofrecer entrega fiable para mensajes críticos como alarmas y eventos de manipulación, mientras que UDP puede reducir la sobrecarga en reportes periódicos frecuentes cuando es compatible.
- Verifique que los firewalls de red y la configuración APN del operador permitan conexiones salientes al endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden introducir diferencias en los tipos de mensaje o campos disponibles; confirme el comportamiento del firmware antes de desplegar a gran escala.
- Los menús de configuración del fabricante y las herramientas de aprovisionamiento pueden presentar los ajustes de transporte o servidor de manera distinta; siga las instrucciones de Jointech al apuntar los dispositivos a Plaspy.
- Algunas unidades JT705A pueden venir configuradas por defecto para reportar a un servidor o puerto distinto y requerir reconfiguración para d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Elegir TCP frente a UDP puede cambiar las características de entrega de mensajes; ajuste la selección de transporte según los requisitos operativos.
- Plaspy detecta el protocolo automáticamente, pero una identificación correcta del dispositivo y IDs consistentes en el lado del rastreador ayudan a evitar registros duplicados o mal atribuidos.
- Valide la semántica de alarmas y manipulación con la documentación de Jointech para asegurar que el mapeo de alertas en Plaspy coincida con el comportamiento esperado.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el JT705A ayuda a garantizar un seguimiento fiable, alertas correctas y una resolución de problemas más rápida cuando los dispositivos se despliegan con Plaspy. Tener claridad sobre las opciones de transporte y los ajustes del servidor reduce el tiempo de incorporación y favorece un desempeño consistente a largo plazo.

- Ayuda a asegurar que los dispositivos apunten a d.plaspy.com o 54.85.159.138 y usen el puerto requerido 8888 para una entrega exitosa.
- Aclara si una unidad debe usar UDP o TCP según el perfil operativo deseado.
- Agiliza la resolución de problemas al acotar las causas a la red, el transporte o diferencias de firmware en lugar de la configuración de la plataforma.
- Garantiza que los eventos de manipulación, desprecintado y alarma se interpreten correctamente al correlacionar el comportamiento del dispositivo con los tipos de evento de Plaspy.
- Permite planificar la vida de la batería y los intervalos de reporte al entender con qué frecuencia el rastreador transmitirá a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el JT705A con Plaspy incorpora la telemetría enfocada en contenedores a un flujo de trabajo centralizado de gestión de flotas, de modo que los equipos de logística y seguridad obtienen visibilidad sobre activos y rutas. Plaspy procesa las actualizaciones de posición del JT705A, eventos de manipulación y desprecintado, y notificaciones de alarma para ofrecer monitoreo en tiempo real, reproducción histórica y alertas accionables que se integran en procesos operativos más amplios.

Si desea saber más sobre Plaspy y cómo funciona con dispositivos como el Jointech JT705A, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolos específicos y firmware del dispositivo, verifique la información en el sitio del fabricante https://www.jointcontrols.com ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.

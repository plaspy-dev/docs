---
slug: /topshine/mt101/protocol
id: mt101-protocol
sidebar_label: Protocol
title: TopShine - MT101 Protocol
sidebar_class_name: menu_item_tracker
description: Documento público sobre el protocolo del TopShine MT101 y su comunicación con Plaspy para seguimiento confiable de motos
keywords:
  - Protocolo TopShine MT101
  - Protocolo GPS TopShine MT101
  - Protocolo TopShine MT101 para Plaspy
  - Protocolo de comunicación TopShine MT101
  - Protocolo de rastreo TopShine MT101
  - Protocolo de rastreador GPS TopShine
  - Protocolo MT101 Plaspy
  - Protocolo de rastreador GPS para motocicletas
  - Gestión de flotas MT101
  - Compatibilidad MT101 con Plaspy
---

# TopShine - Protocolo MT101

Esta página ofrece contexto público sobre el protocolo usado por el rastreador TopShine MT101 para integrarse con Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué papel cumple el protocolo de reporte para lograr un rastreo confiable y qué ajustes de conexión en Plaspy son relevantes para que el equipo informe correctamente a la plataforma. El objetivo es ayudar a integradores técnicos y administradores a comprender cómo el MT101 intercambia información de posición y estado con Plaspy sin revelar detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el rastreador reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del MT101, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en el contexto público y práctico de conexión, no en los detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de mensajes y comportamientos que el MT101 emplea para identificarse, entregar datos de ubicación y eventos, y recibir comandos remotos o acuses de recibo cuando están soportados. A nivel general, el protocolo permite la transferencia fiable de datos desde el dispositivo hacia un servidor backend y ayuda a Plaspy a presentar información útil de ubicación, estado y alertas a los usuarios finales.

- Permite que el MT101 reporte posición GPS, estado y alarmas a un servidor remoto
- Transporta la identidad del dispositivo para que Plaspy relacione los mensajes entrantes con el activo correcto
- Transmite información de ejecución que Plaspy utiliza para mapas, geocercas y alertas
- Permite interacciones remotas opcionales cuando están soportadas, como corte de motor o configuración remota
- Sirve como base para la detección y el análisis automático de protocolos en la plataforma Plaspy

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint y puerto compartidos, y aplica detección automática de protocolos para reconocer rastreadores compatibles. Cuando un MT101 está configurado para reportar a Plaspy, la plataforma suele identificar el protocolo del dispositivo sin que el usuario tenga que seleccionarlo manualmente, siempre que el rastreador esté apuntando correctamente al endpoint de Plaspy.

- Plaspy utiliza el endpoint común d.plaspy.com para las conexiones entrantes de rastreadores
- La plataforma también es accesible mediante la IP pública 54.85.159.138
- Plaspy acepta conexiones en el puerto 8888 y detecta automáticamente el protocolo del rastreador
- Normalmente los usuarios no necesitan elegir un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy
- Plaspy soporta tanto TCP como UDP, por lo que los dispositivos pueden usar cualquiera de los dos transportes para enviar datos

## Transporte y contexto de conexión

Las opciones de conexión y transporte determinan cómo el MT101 envía sus reportes de rastreo a Plaspy. El MT101 puede configurarse para usar la red celular y transmitir datos por TCP o UDP según la configuración del equipo y las condiciones de la red. Para la integración con Plaspy, utilice el endpoint y el puerto compartido para que la plataforma pueda recibir y procesar los reportes.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y configuración del equipo
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración
- Seleccione el modo de transporte (UDP o TCP) de acuerdo con la configuración del rastreador y las necesidades de fiabilidad de la red
- Asegúrese de que el MT101 tenga acceso a la red y la APN correcta para poder alcanzar d.plaspy.com a través de la red celular

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes y el comportamiento, por lo que verifique la versión de firmware del MT101 al hacer diagnósticos
- Las revisiones de hardware y las funciones opcionales, como relé o micrófono, pueden afectar qué campos del protocolo se usan o se reportan
- Las opciones de configuración del fabricante pueden permitir alternar entre UDP y TCP o cambiar los intervalos de reporte
- El entorno de red y el comportamiento de SIM dual pueden influir en el operador y la ruta IP que el dispositivo usa para llegar a Plaspy
- Valide siempre que el equipo esté configurado para enviar datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Confirme qué funciones opcionales están activas en una unidad determinada cuando espere reportes de eventos específicos

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar que los dispositivos estén configurados correctamente, agiliza la resolución de problemas y contribuye a la confiabilidad a largo plazo de los datos de rastreo en Plaspy. Tener claridad sobre el protocolo y el contexto de transporte reduce la ambigüedad cuando los dispositivos no aparecen en línea o cuando los datos reportados parecen inconsistentes.

- Asegura que el MT101 esté apuntando al endpoint y puerto correctos de Plaspy para reportes confiables
- Ayuda a diagnosticar problemas comunes como puertos bloqueados, APN incorrecta o selección errónea de transporte
- Permite validar que la identidad del dispositivo y la cadencia de reportes coincidan con lo esperado en Plaspy
- Facilita confirmar si las funciones opcionales generarán eventos visibles en la plataforma
- Ayuda a planificar actualizaciones de firmware y cambios de hardware que puedan afectar la integración

## Por qué usar Plaspy con este protocolo

Usar el TopShine MT101 con Plaspy ofrece a las organizaciones una forma práctica de recopilar datos de ubicación, estado y alarmas para motocicletas y otros vehículos ligeros. El endpoint compartido de Plaspy y la detección automática de protocolos reducen la fricción en la puesta en marcha, permitiendo que los administradores se concentren en la configuración y los flujos operativos en lugar de en la elección del protocolo.

Si desea obtener más información sobre Plaspy y cómo funciona con rastreadores como el TopShine MT101 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información específica más reciente en el sitio del fabricante https://www.gztopshine.com/

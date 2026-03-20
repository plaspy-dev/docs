---
slug: /neomatica/adm700_3g/protocol
id: adm700_3g-protocol
sidebar_label: Protocol
title: Neomatica - ADM700 3G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador Neomatica ADM700 3G con Plaspy y telemática de flotas confiable
keywords:
  - Protocolo Neomatica ADM700 3G
  - Protocolo GPS ADM700 3G
  - Compatibilidad ADM700 3G Plaspy
  - Protocolo rastreador GPS Neomatica
  - Protocolo telemático ADM700
  - Protocolo de seguimiento Neomatica
  - Protocolo de comunicación ADM700 3G
  - Rastreo vehicular ADM700 3G
  - Seguimiento de flotas Neomatica
  - Protocolo EGTS ADM700
---

# Neomatica - Protocolo ADM700 3G

Esta página ofrece contexto público sobre el protocolo utilizado por el rastreador Neomatica ADM700 3G para integrarse con la plataforma Plaspy. Se enfoca en cómo el dispositivo comunica datos con Plaspy, qué ajustes de conexión son necesarios y consideraciones prácticas para la integración, sin exponer detalles sensibles de implementación.

Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página describe el modelo general de comunicación y las consideraciones de compatibilidad en lugar de los detalles internos del equipo.

## Visión general del protocolo

El protocolo de comunicación del ADM700 3G es el mecanismo por el cual se envían a Plaspy las posiciones, telemetría, eventos y registros almacenados. En términos generales, el protocolo permite la identificación del dispositivo, la gestión de sesión y la entrega de elementos de datos que Plaspy procesa para rastreo en vivo, alertas y reproducción histórica.

- Permite que el dispositivo se identifique ante un servidor remoto y asocie los datos a un activo específico.
- Transmite ubicación GNSS, marca de tiempo y datos básicos de calidad de la señal que Plaspy utiliza para mapa e historial.
- Transporta telemetría como datos CAN, entradas analógicas y digitales, y eventos del acelerómetro para diagnóstico y notificaciones.
- Soporta la subida de registros almacenados cuando hay reconexión tras una pérdida temporal de conectividad.
- Puede incluir estándares soportados por el fabricante como EGTS y un protocolo abierto para simplificar la integración en servidor.

## Cómo Plaspy detecta el protocolo

Plaspy opera un punto de ingreso unificado y un puerto para los reportes de dispositivos; la plataforma determina automáticamente el protocolo cuando un dispositivo se conecta. En la mayoría de despliegues, basta con configurar el dispositivo para que envíe datos a Plaspy y la detección del protocolo ocurrirá sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en el dominio d.plaspy.com y en la IP pública 54.85.159.138 para tráfico entrante de dispositivos.
- La plataforma utiliza el puerto 8888 para conexiones de dispositivos; todos los equipos en Plaspy emplean el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario elegir el protocolo en la interfaz.
- La configuración correcta del equipo para reportar al endpoint de Plaspy es el requisito principal para la detección automática.
- La detección está diseñada para admitir protocolos abiertos comunes y estándares de fabricantes como EGTS cuando están presentes.

## Transporte y contexto de conexión

El transporte y la dirección de conexión son los principales elementos de configuración al apuntar un ADM700 3G a Plaspy. El ADM700 3G admite direccionamiento por nombre de dominio y modos de datos celulares que permiten un enrutamiento flexible hacia el endpoint de Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el soporte del equipo y la configuración elegida.
- Al configurar el rastreador, puede apuntarlo a d.plaspy.com o directamente a 54.85.159.138 para alcanzar la ingestión de Plaspy.
- El puerto usado para reportes es 8888; Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
- El comportamiento de Dual SIM y conmutación de red en el ADM700 3G ayuda a mantener la conectividad con el endpoint de Plaspy a través de diferentes operadores.
- El uso de direccionamiento por nombre de dominio facilita cambios de servidor sin reprogramar los dispositivos cuando el firmware lo soporta.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar variantes de mensajes y campos disponibles; confirme la versión de firmware al validar el comportamiento.
- Revisiones de hardware y módulos opcionales de E/S o interfaces pueden alterar el conjunto de elementos de telemetría que una unidad puede reportar.
- Ajustes del lado del fabricante y funciones habilitadas, como EGTS o modos de protocolo abierto, afectan qué recibe Plaspy.
- La selección de transporte entre UDP y TCP puede influir en la semántica de entrega y debe coincidir con la configuración del equipo y las necesidades operativas.
- La capacidad de registro sin conexión y las estrategias de subida varían según la configuración y el ancho de banda celular disponible.
- Siempre valide, de extremo a extremo, una unidad representativa para confirmar que los elementos de datos esperados llegan a Plaspy.

## Por qué es importante comprender el protocolo

Tener un conocimiento básico del protocolo de comunicación del ADM700 3G facilita la configuración, las pruebas y la resolución de problemas, y contribuye a mantener la fiabilidad a largo plazo en operaciones de flota con Plaspy.

- Garantiza que el dispositivo apunte al endpoint y puerto correctos de Plaspy para que los datos lleguen a la plataforma.
- Ayuda a diagnosticar problemas de conectividad al confirmar el modo de transporte (UDP o TCP) y la dirección objetivo.
- Orienta las decisiones sobre firmware y configuración que afectan qué campos de telemetría estarán disponibles en Plaspy.
- Facilita la planificación del registro sin conexión y el comportamiento de subida masiva para vehículos con cobertura intermitente.
- Favorece la coordinación con el soporte del fabricante cuando el comportamiento del dispositivo difiere de lo esperado.

## Por qué usar Plaspy con este protocolo

El ADM700 3G combina hardware resistente, amplio soporte de E/S y CAN, y resiliencia celular, lo que lo convierte en una opción sólida para seguimiento de flotas industriales y equipos pesados. Integrado con Plaspy, su organización obtiene visibilidad unificada de ubicación, telemetría del vehículo, alertas y registros históricos para respaldar operaciones, seguridad y mantenimiento.

Plaspy simplifica la integración al ofrecer un único endpoint de ingestión en d.plaspy.com (54.85.159.138) en el puerto 8888 que acepta reportes de dispositivos por UDP o TCP. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, reduciendo la necesidad de seleccionar manualmente el protocolo en la plataforma. Para obtener más información sobre Plaspy y cómo puede trabajar con dispositivos Neomatica visite https://www.plaspy.com. Para detalles específicos del protocolo de dispositivo, notas de firmware y guías de implementación consulte al fabricante en https://neomatica.com/.

---
slug: /ulbotech/t373a/protocol
id: t373a-protocol
sidebar_label: Protocol
title: Ulbotech - T373A Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para el rastreador GPS Ulbotech T373A y su compatibilidad con Plaspy con guía de conexión y transporte
keywords:
  - Protocolo Ulbotech T373A
  - Protocolo GPS T373A
  - Rastreador GPS Ulbotech Plaspy
  - Protocolo de comunicación T373A
  - Protocolo de rastreo T373A
  - Protocolo rastreador OBD II
  - Compatibilidad dispositivos Plaspy
  - Rastreo de flotas T373A
  - Telemetría OBD Plaspy
  - Protocolo de rastreo vehicular
---

# Ulbotech - Protocolo T373A

Esta página presenta el contexto público del protocolo para usar el rastreador Ulbotech T373A con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a un alto nivel, de modo que los administradores de flotas e integradores comprendan el comportamiento de conexión y reporte sin exponer detalles internos de firmware o formatos de paquete propietarios. El T373A es un rastreador OBD II plug and play que reporta GPS y telemetría vehicular detallada; esta guía explica cómo esos datos suelen llegar a Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según el firmware, la revisión de hardware y la implementación del fabricante. El T373A soporta redes celulares multibanda, receptor GNSS integrado y reporte completo de datos OBD II, pero detalles como PIDs OBD disponibles, frecuencia de eventos y comportamiento del inmovilizador pueden diferir según el firmware y la implementación del bus CAN del vehículo.

## Resumen del protocolo

A nivel público, el protocolo del rastreador define cómo el dispositivo empaqueta y transmite telemetría, posición, estado y eventos hacia un servidor remoto para que la plataforma de flotas pueda ingerir y mostrar información útil. Para el T373A esto incluye posiciones GPS, parámetros OBD II, eventos del acelerómetro y señales de estado que Plaspy mapea a ubicaciones, alertas y registros telemáticos.

- Permite al dispositivo enviar fijaciones de ubicación y telemetría vehicular con sello de tiempo a un endpoint remoto para su ingestión.
- Transporta parámetros derivados de OBD II como velocidad, RPM, valores relacionados con combustible y señales de códigos de diagnóstico.
- Transmite eventos de movimiento y comportamiento del conductor generados por el acelerómetro a bordo para alertas por frenadas bruscas o curvas agresivas.
- Proporciona un canal para reportar el estado del dispositivo, la señal GSM y eventos de batería o alimentación auxiliar.
- Soporta comandos remotos y flujos de configuración a alto nivel cuando lo permite el firmware del dispositivo y la plataforma de gestión.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta al endpoint de la plataforma. Los dispositivos configurados para apuntar a Plaspy serán reconocidos y parseados siempre que utilicen el transporte y los ajustes de dirección soportados.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador.
- Cuando un dispositivo reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador, por lo que normalmente no se requiere selección manual de protocolo dentro de la plataforma.
- Un APN correcto, la provisión adecuada de la SIM y intervalos de reporte coherentes ayudan a Plaspy a identificar tráfico estable del dispositivo y clasificar variantes del protocolo.

## Transporte y contexto de conexión

Las elecciones de conexión afectan cómo el T373A llega a Plaspy, pero no cambian el concepto público del protocolo. El rastreador puede usar cualquiera de los transportes IP comunes soportados por muchos dispositivos celulares y debe apuntarse al endpoint de Plaspy para una ingestión confiable.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según soporte y configuración.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o al host numérico 54.85.159.138 para enrutamiento directo.
- El puerto es 8888 y permanece como el puerto común de escucha para la ingestión en Plaspy entre los dispositivos soportados.
- UDP puede reducir la sobrecarga para reportes pequeños y frecuentes, mientras que TCP puede usarse cuando se prefiere la fiabilidad de sesión y el dispositivo lo soporta.
- Ajustes a nivel de red como APN, reglas de firewall y restricciones del operador pueden influir en si TCP o UDP es práctico en una implementación concreta.

## Notas sobre compatibilidad del protocolo

- Diferencias de firmware entre lotes de producción y actualizaciones FOTA pueden cambiar los campos de telemetría disponibles, los umbrales de eventos y los comandos soportados.
- Revisiones de hardware o implementaciones CAN específicas del vehículo pueden exponer distintos PIDs OBD II o tramas CAN, provocando variación en la telemetría reportada.
- Opciones de configuración del fabricante como tipo de transporte por defecto, intervalo de latido y cableado del inmovilizador pueden alterar el comportamiento de red del dispositivo.
- La selección de transporte afecta el comportamiento frente a firewalls y NAT en diferentes redes móviles; valide rutas UDP y TCP con su operador si es necesario.
- Confirme siempre los detalles de APN y la provisión de la SIM para que el dispositivo alcance el endpoint de Plaspy de forma fiable.
- Valide la compatibilidad contra la documentación oficial de Ulbotech para comportamientos específicos de firmware y listas de soporte por vehículo.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar despliegues exitosos, telemetría confiable y una resolución eficiente de problemas al integrar el T373A con Plaspy. Familiarizarse con lo que el dispositivo envía y cómo la plataforma lo recibe reduce la fricción en el despliegue y acorta los tiempos de resolución para problemas de conectividad o datos.

- Ayuda a verificar que el dispositivo reporte los parámetros GPS y OBD II esperados para sus flujos de trabajo de flota.
- Facilita el diagnóstico de problemas de conectividad relacionados con APN, SIM o transporte frente a problemas de firmware del dispositivo o del bus del vehículo.
- Mejora la asignación de eventos para que el comportamiento del conductor, las acciones del inmovilizador y las alertas DTC se interpreten de manera consistente dentro de Plaspy.
- Apoya la planificación de actualizaciones de firmware y la gestión de cambios de funciones que puedan afectar la frecuencia de reporte o la telemetría disponible.
- Permite una mejor coordinación con el soporte de Ulbotech cuando los registros o comportamientos específicos del dispositivo requieran conocimiento a nivel de fabricante.

## Ventajas de usar Plaspy con este protocolo

Usar el T373A con Plaspy ofrece visibilidad centralizada de la ubicación del vehículo, telemetría OBD II y comportamiento del conductor sin cableado complejo. Para flotas, operadores de renta, aseguradoras y servicios de asistencia en carretera, la combinación de reporte OBD II plug and play y una plataforma que normaliza la telemetría simplifica las operaciones, las alertas y los informes.

Plaspy ingiere los datos del T373A y los presenta en mapas, reportes y alertas para que los equipos puedan actuar sobre consumo de combustible, indicadores de mantenimiento, eventos de inmovilizador e incidentes relacionados con la seguridad. Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente del dispositivo con el fabricante en http://www.ulbotech.com/ para mayor precisión.

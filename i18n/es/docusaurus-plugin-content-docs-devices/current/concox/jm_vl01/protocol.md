---
slug: /concox/jm_vl01/protocol
id: jm_vl01-protocol
sidebar_label: Protocol
title: Concox - JM-VL01 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para usar el rastreador Concox JM-VL01 con Plaspy para integración y monitoreo de flotas
keywords:
  - protocolo Concox JM-VL01
  - protocolo GPS JM VL01
  - protocolo rastreador GPS Concox
  - comunicación JM VL01
  - protocolo de seguimiento Concox
  - compatibilidad de dispositivos Plaspy
  - rastreo de flotas Concox
  - integración JM VL01
  - protocolo de telemetría Concox
  - rastreador vehicular JM VL01
---

# Concox - Protocolo JM-VL01

Esta página describe el contexto público del protocolo para utilizar el rastreador Concox JM-VL01 con la plataforma Plaspy. Se enfoca en cómo se comunica el dispositivo a alto nivel, qué ajustes de conexión deben configurarse para reportar a Plaspy y qué comportamientos del equipo son relevantes al integrarlo para monitoreo de flotas y telemática.

El JM-VL01 es un rastreador 4G moderno que opera en redes LTE, UMTS y GSM y ofrece funciones estándar para flotas como ubicación por GPS, alertas de geocerca, notificaciones por eventos, detección de encendido, corte remoto, soporte opcional para sensores RS485 y un botón de pánico en cabina. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Descripción general del protocolo

El protocolo del dispositivo es la capa de comunicación que el JM-VL01 utiliza para enviar datos de ubicación, estado y eventos a un servidor remoto y para recibir comandos de control o configuraciones cuando corresponda. Para la integración con Plaspy, el objetivo principal es asegurarse de que el equipo esté configurado para reportar al endpoint de Plaspy y que los ajustes de transporte coincidan con las capacidades del rastreador.

- Permite el envío periódico y basado en eventos de la posición GPS y del estado del vehículo a Plaspy.
- Identifica la instancia del dispositivo para que Plaspy pueda asociar los datos entrantes al vehículo o activo correcto.
- Encapsula telemetría como estado de encendido, alertas de movimiento, eventos de geocerca y lecturas opcionales de sensores en un formato que el servidor puede interpretar.
- Permite que el servidor envíe acciones remotas o actualizaciones de parámetros cuando el dispositivo y la implementación lo soportan.
- Funciona sobre transportes de red estándar para que los dispositivos en redes móviles puedan alcanzar Plaspy de forma confiable.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único endpoint y puerto compartidos para los reportes entrantes de dispositivos y aplica detección automática para asociar los mensajes con el tipo de rastreador correcto. Cuando un JM-VL01 está configurado para reportar a la dirección de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente en la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y también es accesible mediante la IP pública 54.85.159.138.
- Plaspy usa el puerto 8888 para las comunicaciones con dispositivos y todos los dispositivos en Plaspy usan el mismo puerto.
- La plataforma detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy.
- Por lo general, los usuarios solo deben configurar el equipo para apuntar a d.plaspy.com o a la IP pública indicada y asegurarse de seleccionar el transporte correcto en el rastreador.
- Si el dispositivo utiliza los campos de reporte e identificadores esperados, Plaspy mapeará automáticamente los mensajes entrantes al perfil vehicular correspondiente.

## Transporte y contexto de conexión

Las elecciones de conexión y transporte determinan cómo el JM-VL01 alcanza Plaspy desde la red móvil. El dispositivo puede configurarse para usar UDP o TCP según las opciones de firmware y las necesidades de fiabilidad del despliegue. Comprender estas opciones ayuda a garantizar que el equipo alcance el servidor de Plaspy de forma consistente.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del rastreador y la configuración del sitio.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a 54.85.159.138 si no se utiliza DNS.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles para simplificar la configuración y la red.
- Elija TCP cuando se requiera un transporte confiable para comandos críticos o confirmaciones si el dispositivo lo soporta; UDP puede usarse para reportes periódicos de baja sobrecarga.
- Asegúrese de que cualquier APN del operador o políticas de firewall permitan conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido exacto de los mensajes y las funciones disponibles; verifique siempre el nivel de firmware al validar el comportamiento.
- Las revisiones de hardware o módulos opcionales como sensores RS485 pueden añadir o modificar campos de telemetría que el servidor necesita interpretar.
- La selección de transporte (UDP frente a TCP) está determinada por el firmware y la configuración del dispositivo y puede afectar la semántica de entrega.
- Las herramientas de configuración del fabricante pueden usar ajustes de servidor predeterminados distintos; confirme que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo cuando el dispositivo informa correctamente, pero problemas a nivel de red como puertos bloqueados o APN incorrecto pueden impedir el registro exitoso.
- Valide la compatibilidad contra la documentación más reciente de Concox y las notas de versiones para comportamientos específicos del dispositivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el JM-VL01 ayuda a administradores e integradores a poner los equipos en línea rápidamente, diagnosticar problemas de conectividad o datos y tomar decisiones informadas sobre firmware y ajustes de transporte. Un contexto claro del protocolo reduce el tiempo de resolución de incidencias y mejora la fiabilidad a largo plazo del monitoreo de flotas.

- Ayuda a garantizar que el dispositivo esté configurado para alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy reciba los reportes.
- Facilita verificar si el dispositivo debe usar UDP o TCP en su despliegue y qué efecto tiene esto en la entrega.
- Ayuda en la resolución de problemas cuando los mensajes no aparecen en Plaspy al reducir el foco a la red, el firmware o la capa de configuración.
- Aclara qué campos de telemetría esperar de funciones como detección de encendido, geocercas, corte remoto y sensores RS485 opcionales.
- Permite planificar rutas de actualización de firmware y revisiones de hardware que puedan cambiar el comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el Concox JM-VL01 con Plaspy ofrece a las organizaciones una vía sencilla para centralizar la recolección de ubicación, estado y eventos vehiculares en una sola plataforma. La gama de funcionalidades orientadas a flotas del JM-VL01 —reportes de posición, eventos, monitoreo de encendido, inmovilización remota y entradas de sensores— se integra bien con la visibilidad operativa y las alertas que ofrece Plaspy.

Plaspy simplifica la configuración del equipo al exponer un endpoint y un puerto únicos y consistentes para todos los dispositivos y al detectar automáticamente el protocolo cuando el JM-VL01 apunta a la plataforma. Para obtener más información sobre cómo Plaspy gestiona conexiones de dispositivos y funciones de administración de flotas, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y especificaciones de hardware más actualizadas de este rastreador Concox, verifique la información en el sitio del fabricante https://www.iconcox.com/.

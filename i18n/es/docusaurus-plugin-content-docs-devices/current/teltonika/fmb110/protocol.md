---
slug: /teltonika/fmb110/protocol
id: fmb110-protocol
sidebar_label: Protocol
title: Teltonika - FMB110 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del Teltonika FMB110 para comunicación con Plaspy y contexto de compatibilidad
keywords:
 - Teltonika FMB110
 - protocolo FMB110
 - protocolo GPS FMB110
 - protocolo de comunicación FMB110
 - protocolo de rastreo FMB110
 - rastreador GPS Teltonika
 - compatibilidad Plaspy
 - protocolo rastreo de vehículos
 - telemetría cadena de frío
 - rastreador GPS BLE
---

# Teltonika - Protocolo FMB110

Esta página describe el contexto público del protocolo utilizado por el rastreador Teltonika FMB110 cuando se integra con Plaspy. Se centra en cómo el dispositivo reporta posición y telemetría a la plataforma Plaspy y en las configuraciones de conexión comunes para la integración, manteniendo un nivel alto de descripción y sin entrar en detalles sensibles de parsers o formatos binarios internos.

El Teltonika FMB110 es un rastreador vehicular 2G compacto con antenas celulares y GNSS internas, soporte 1-Wire para sondas DS18B20 y etiquetas iButton, conectividad BLE y control de inmovilizador. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

A nivel público, el protocolo de comunicación define cómo el FMB110 transmite posiciones GNSS, telemetría, lecturas de sensores e información de estado a un servidor remoto como Plaspy. El protocolo es el mecanismo por el cual el dispositivo se identifica, reporta eventos y soporta flujos de monitoreo y control remoto sin exponer detalles internos del dispositivo.

- Permite al FMB110 reportar posición GPS, marcas de tiempo y estado del vehículo a Plaspy para visualización en tiempo real e historial.
- Transporta telemetría desde interfaces a bordo como sensores de temperatura 1-Wire, entradas de sensores por BLE y entradas digitales usadas para encendido o estado de puertas.
- Transmite la identificación del dispositivo y metadatos de estado para que Plaspy asocie los mensajes entrantes con el activo y la configuración correctos.
- Soporta acciones y flujos de monitoreo remoto, como estado del inmovilizador y alertas, sin detallar tramas de comando específicas del fabricante.
- Sirve de base para funciones de alto nivel en Plaspy, como alertas, reportes y paneles que consumen los datos del rastreador.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido e inspecciona datos públicamente observables para determinar el protocolo del dispositivo. Dado que Plaspy usa ajustes de conexión unificados para los rastreadores compatibles, la integración típica no requiere selección manual de protocolo dentro de Plaspy cuando el dispositivo está configurado correctamente.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 en el puerto 8888.
- Los dispositivos pueden configurarse para reportar tanto a d.plaspy.com como a 54.85.159.138 y usar TCP o UDP para alcanzar el servidor.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de firewall y red para despliegues a gran escala.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios por lo general no necesitan elegir una opción de protocolo específica dentro de la plataforma cuando el rastreador apunta al endpoint de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el FMB110 llega a Plaspy a nivel de red. El FMB110 se usa comúnmente en redes celulares donde DNS, APN y el tipo de transporte pueden afectar la entrega. Mantener claros los detalles de transporte ayuda con reglas de firewall, configuración DNS y resolución de problemas.

- El puerto es 8888 y el dispositivo puede configurarse para usar UDP o TCP en ese puerto.
- Apuntar el rastreador a d.plaspy.com o a la dirección numérica 54.85.159.138 dirige el tráfico a los servidores de Plaspy.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos soportados, las políticas de red pueden estandarizarse en toda la flota.
- Use DNS cuando sea posible para permitir cambios de IP del servidor sin reconfigurar los equipos finales; la IP numérica puede emplearse en entornos que lo requieran.
- Asegúrese de que el tráfico saliente del dispositivo hacia el endpoint de Plaspy esté permitido por el operador y las reglas de firewall para evitar que la telemetría sea bloqueada.

## Notas de compatibilidad del protocolo

- El comportamiento del dispositivo y los elementos de mensaje soportados pueden variar según el build de firmware; verifique las notas de la versión para diferencias en las funciones.
- Las revisiones de hardware o variantes de SKU pueden afectar interfaces disponibles como alcance BLE, soporte 1-Wire o el cableado del inmovilizador.
- La selección de transporte (UDP vs TCP) puede estar limitada por redes de los operadores o por opciones de configuración específicas del equipo; confirme los ajustes del dispositivo antes de un despliegue masivo.
- Mejoras o cambios por parte del fabricante pueden modificar tiempos, campos opcionales o reporte de sensores; valide siempre con la documentación vigente del dispositivo.
- Pruebe un número reducido de unidades en su entorno Plaspy antes de un despliegue a gran escala para confirmar el comportamiento esperado.
- En caso de duda, consulte los recursos de producto de Teltonika y el configurador del dispositivo para confirmar las funciones soportadas según su firmware y revisión de hardware.

## Por qué es importante entender el protocolo

Entender el protocolo de comunicación a alto nivel ayuda a técnicos e integradores a configurar los equipos correctamente, solucionar problemas de flujo de datos y mapear las salidas del dispositivo a funcionalidades de Plaspy como alertas y reportes. También facilita la planificación frente a restricciones de red y operativas.

- Acelera la puesta en marcha al alinear las configuraciones de reporte del dispositivo con los requisitos de conexión de Plaspy.
- Reduce el tiempo de resolución cuando la telemetría o flujos de sensores no aparecen en los paneles de Plaspy.
- Ayuda a garantizar que canales de sensores como sondas de temperatura 1-Wire y sensores BLE se mapeen e interpreten de manera consistente.
- Soporta verificaciones de compatibilidad frente a actualizaciones de firmware y revisiones de hardware.
- Permite una planificación predecible de firewall y configuraciones de operador para despliegues a nivel de flota.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB110 con Plaspy proporciona a las organizaciones un rastreador compacto y con capacidad de sensores que alimenta posición y telemetría en tiempo real dentro de una única plataforma. El soporte del FMB110 para sensores de temperatura 1-Wire, accesorios BLE y control de inmovilizador complementa las capacidades de mapeo, alertas y reportes de Plaspy para casos de uso como rastreo de flotas, monitoreo de cadena de frío y prevención de robos.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el Teltonika FMB110 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información específica y más reciente del dispositivo con Teltonika en https://www.teltonika-gps.com/ para asegurar la compatibilidad y la guía de configuración actuales.

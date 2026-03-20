---
slug: /topshine/vt111/protocol
id: vt111-protocol
sidebar_label: Protocol
title: TopShine - VT111 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador TopShine VT111 y su comunicación con Plaspy para rastreo y seguridad vehicular
keywords:
  - protocolo TopShine VT111
  - protocolo GPS TopShine VT111
  - protocolo de comunicación TopShine VT111
  - protocolo de rastreo VT111
  - compatibilidad TopShine VT111 Plaspy
  - protocolo rastreador GPS TopShine
  - protocolo rastreador vehicular VT111
  - integración rastreo VT111
  - configuración rastreador Plaspy
  - guía protocolo rastreo vehicular
---

# TopShine - Protocolo VT111

Esta página resume el contexto público del protocolo para usar el rastreador vehicular mini TopShine VT111 con la plataforma Plaspy. Explica cómo el dispositivo suele reportar ubicación y estado a un servidor de seguimiento, el papel del protocolo de reporte en la integración y notas prácticas para que usuarios de flotas y seguridad entiendan la conectividad con Plaspy. La descripción del VT111 que aparece más arriba sirve de base para este panorama, incluyendo sus funciones de rastreo, alertas y la opción de RFID.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa a la plataforma. El comportamiento exacto del protocolo en el VT111 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público y no en formatos de paquete privados ni en detalles internos de firmware.

## Resumen del protocolo

El VT111 se comunica con una plataforma de seguimiento remota para reportar ubicación, movimiento, alarmas y estado básico. El protocolo de reporte del rastreador define cómo el equipo envía su identidad, telemetría y eventos de alarma para que la plataforma presente datos útiles para monitoreo y control.

- Permite reportes de posición periódicos y por eventos para rastreo vehicular y alertas de geocerca
- Transporta información de identidad y sesión para que un servidor como Plaspy asocie mensajes a un dispositivo específico
- Comunica eventos de alarma y estado como alertas de movimiento, pérdida de energía y señales opcionales de ACC o puertas
- Soporta acciones de control remoto iniciadas desde la plataforma o por centro SMS cuando el dispositivo y el firmware lo permiten
- Ofrece posicionamiento basado en GPS y posicionamiento por celular como alternativa para mejorar la cobertura

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los rastreadores en un único punto compartido y determina automáticamente el protocolo empleado por el dispositivo. En la mayoría de los casos no es necesario que el usuario seleccione manualmente un protocolo dentro de Plaspy si el VT111 está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha las conexiones entrantes de rastreadores en el endpoint compartido del servidor en d.plaspy.com
- El endpoint de la plataforma resuelve a 54.85.159.138 y utiliza el puerto 8888 para tráfico de dispositivos
- Todos los dispositivos en Plaspy utilizan el mismo puerto, lo que simplifica la configuración
- Plaspy admite reportes por UDP y TCP cuando los dispositivos están configurados para usar cualquiera de estos transportes
- Si el VT111 apunta al endpoint de Plaspy y queda autorizado por su identidad de dispositivo, Plaspy detectará automáticamente el formato de reporte

## Transporte y contexto de conexión

Comprender los ajustes de transporte y conexión ayuda a asegurar que el VT111 alcance Plaspy de forma confiable. El VT111 soporta reportes por GPRS y modos SMS, y cuando se usa con un servidor de seguimiento puede configurarse para reportar en la red vía UDP o TCP.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según lo permita el equipo y su configuración
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 como servidor de reporte
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, haciendo la configuración uniforme entre equipos
- Elija UDP para menor sobrecarga en enlaces con pérdida o TCP si se prefiere fiabilidad de sesión y el dispositivo lo soporta
- Verifique la configuración APN de la red móvil y la conectividad GPRS del VT111 al habilitar el reporte a la plataforma

## Notas sobre compatibilidad de protocolo

- Variaciones de firmware pueden modificar qué mensajes y campos envía el VT111; siempre revise las notas de la versión del firmware
- Revisiones de hardware u módulos opcionales como RFID pueden introducir mensajes o campos adicionales que no estén presentes en todas las unidades
- Algunas funciones como corte remoto, monitoreo de voz o búsqueda de dirección pueden depender del soporte de la plataforma además de la capacidad del dispositivo
- La selección de transporte entre UDP y TCP debe coincidir con lo que soporte el firmware del equipo y las preferencias del operador
- Los ajustes de servidor por defecto del fabricante pueden diferir de los requeridos por Plaspy, así que actualice el endpoint de reporte a d.plaspy.com o 54.85.159.138 al integrar
- Valide el comportamiento en una prueba controlada antes de un despliegue amplio para asegurarse de que alarmas, eventos de geocerca y controles de inmovilización funcionen como se espera

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del VT111 ayuda a asegurar una incorporación fiable de dispositivos, una resolución de problemas efectiva y una operación predecible en Plaspy. Saber cómo el dispositivo reporta y qué espera la plataforma reduce el tiempo de integración y mejora la visibilidad de la flota.

- Asegura la direccionamiento correcto del dispositivo para que los reportes lleguen al servidor Plaspy y se asocien al vehículo adecuado
- Facilita la resolución de problemas de conectividad revisando transporte, APN y ajustes de endpoint
- Aclara qué eventos y telemetría estarán disponibles en Plaspy según el firmware y las opciones de hardware instaladas
- Orienta la elección de transporte y la configuración de red para un reporte confiable
- Ayuda a planificar características opcionales como inmovilización o armados con RFID que pueden requerir configuración adicional en la plataforma

## Por qué usar Plaspy con este protocolo

Usar el TopShine VT111 con Plaspy ofrece un camino práctico hacia la visibilidad vehicular, el monitoreo de seguridad y la supervisión operativa sin necesitar configurar puertos por cada dispositivo. La detección automática de Plaspy y el endpoint compartido simplifican la puesta en marcha para operadores que despliegan muchos rastreadores pequeños como el VT111 en una flota.

Plaspy está diseñado para aceptar reportes del VT111 cuando el dispositivo está configurado para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888 y cuando el dispositivo usa UDP o TCP según lo soporte su firmware. Para obtener más información sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para detalles específicos de protocolo del dispositivo, notas de firmware y guía de implementación más actualizada del fabricante, verifique la información en el sitio oficial de TopShine en https://www.gztopshine.com/.

Nota editorial: La información en esta página describe el contexto público del protocolo y ajustes de transporte comunes. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, así que confirme siempre las especificaciones actuales del dispositivo con la documentación oficial del fabricante.

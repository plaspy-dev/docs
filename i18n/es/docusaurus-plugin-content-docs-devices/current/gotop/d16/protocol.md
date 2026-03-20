---
slug: /gotop/d16/protocol
id: d16-protocol
sidebar_label: Protocol
title: GOTOP - D16 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador GPS GOTOP D16 con Plaspy y lograr seguimiento de bicicletas y gestión de flotas confiables
keywords:
  - protocolo GOTOP D16
  - protocolo GPS GOTOP D16
  - protocolo GOTOP D16 para Plaspy
  - protocolo de comunicación GOTOP D16
  - protocolo de rastreo GOTOP D16
  - protocolo rastreador GPS GOTOP
  - integración de dispositivos Plaspy
  - protocolo rastreador GPS para bicicletas
  - protocolo D16 seguimiento de flotas
  - compatibilidad rastreador bici Plaspy
---

# GOTOP - Protocolo D16

Esta página describe el contexto público del protocolo para usar el rastreador GPS 4G para bicicletas GOTOP D16 con Plaspy. Explica cómo se comunica típicamente el dispositivo con Plaspy, qué ajustes de conexión públicos utiliza Plaspy y qué comportamiento de reporte puede esperar el operador al integrar unidades D16 en la plataforma.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público y no sensible que ayuda con la configuración y resolución de problemas sin entrar en detalles internos del firmware.

## Visión general del protocolo

El D16 utiliza sus sistemas celulares y GNSS integrados para enviar ubicación y estado a un endpoint en la nube. El protocolo del dispositivo define cómo el rastreador se identifica, envía actualizaciones de posición y sensores, y acepta comandos remotos a través del servicio en la nube para que Plaspy muestre ubicación en tiempo real, eventos y alertas a operadores y usuarios.

- Habilita reportes periódicos de posición y estado de movimiento para seguimiento en vivo y reproducción de historial.
- Transmite el estado del dispositivo, como nivel de batería y eventos de alarma, que Plaspy convierte en notificaciones y registros.
- Admite acciones de control remoto que se enrutan desde Plaspy al dispositivo para señalización LED y otros comandos permitidos.
- Envía mensajes de geocerca y eventos de alarma que disparan reglas de alerta y líneas de tiempo de eventos en Plaspy.
- Permite a Plaspy mapear la telemetría a registros de dispositivo para que los operadores gestionen flotas, consulten historiales de viaje y auditen eventos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un único endpoint público y determina automáticamente el protocolo que usa el D16 cuando el dispositivo reporta. En la mayoría de los casos los operadores no necesitan seleccionar un protocolo específico dentro de Plaspy si el D16 está configurado para reportar al endpoint de Plaspy.

- El dominio público del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Todos los dispositivos Plaspy usan el mismo puerto, lo que simplifica la configuración y el encaminamiento en el lado del rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint y puerto compartidos.
- Normalmente solo debe apuntar el D16 al endpoint de Plaspy y asegurarse de que los ajustes de transporte coincidan con la capacidad del dispositivo.
- Si un dispositivo no parece reportar correctamente, revisar la configuración de reporte y la versión de firmware suele ser el siguiente paso.

## Contexto de transporte y conexión

El D16 puede configurarse para enviar sus reportes a través de capas de transporte comunes soportadas por rastreadores celulares. Plaspy expone un único puerto de escucha para todos los dispositivos y soporta reportes por UDP y TCP, de modo que los operadores pueden elegir el transporte que mejor coincida con el firmware del dispositivo y las condiciones de la red.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador.
- El endpoint de Plaspy puede resolverse por dominio d.plaspy.com o por la IP 54.85.159.138 cuando DNS o el enrutamiento requieran una IP.
- El puerto compartido de Plaspy para todos los dispositivos es 8888, lo que reduce la complejidad de configuración por dispositivo.
- Elija UDP cuando desee menor sobrecarga de transporte y sea compatible, o TCP cuando prefiera entrega confiable y comportamiento de sesión si el firmware del dispositivo lo ofrece.
- Confirme que el ajuste de transporte del dispositivo coincida con el modo elegido en Plaspy y en la configuración del rastreador para asegurar reportes exitosos.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el conjunto de mensajes que envía un D16 y la forma en que se reportan ciertos eventos; anote siempre la versión de firmware al validar comportamiento.
- Variantes de hardware o versiones regionales (por ejemplo LTE frente a modelos 2G opcionales) pueden diferir en bandas soportadas y capacidades de reporte.
- Opciones de configuración del fabricante pueden alterar la selección de transporte, los intervalos de latido y el soporte de comandos remotos; verifique los ajustes del dispositivo a los que tiene acceso.
- La incompatibilidad de transporte es un problema común; asegúrese de que el D16 esté configurado para UDP o TCP conforme a su plan de red y a las expectativas de Plaspy.
- Restricciones de red como NAT del operador o firewalls pueden afectar que el dispositivo llegue a d.plaspy.com o a la IP proporcionada.
- Valide la compatibilidad contra la documentación oficial del fabricante para comportamientos específicos del dispositivo y variantes de modelo.

## Por qué es importante entender el protocolo

Conocer el contexto público del protocolo para el D16 ayuda a desplegarlo de forma confiable, acelerar la resolución de problemas y garantizar un comportamiento predecible en uso operativo. Entender qué reporta el rastreador y cómo se conecta a Plaspy reduce la ambigüedad durante la configuración y le ayuda a interpretar correctamente eventos y alarmas.

- Facilita la configuración correcta del dispositivo respecto a transporte, dirección del servidor e intervalos de reporte.
- Acelera la resolución de problemas cuando un dispositivo no es visible o la telemetría parece inconsistente.
- Permite anticipar diferencias introducidas por actualizaciones de firmware o variantes de dispositivo al planificar despliegues de flota.
- Orienta la decisión sobre la selección de transporte para resiliencia de red y comportamiento de entrega esperado.
- Aclara cómo el control remoto de LED y los eventos de geocerca se retransmiten a través de Plaspy para que los operadores diseñen flujos de alerta y control.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP D16 con Plaspy ofrece a operadores de flotas de bicicletas y a ciclistas individuales una forma práctica de combinar hardware compacto y orientado a bicicleta con una plataforma en la nube que muestra ubicación en tiempo real, alertas e historial de rutas. Plaspy ingiere la telemetría del D16 para habilitar cumplimiento de geocercas, alertas de batería baja y control remoto de LED, de modo que las flotas mantengan visibilidad y seguridad de los conductores y los activos.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el GOTOP D16, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guías de implementación actualizadas, verifique la información con el fabricante en https://www.gotop.cc/ ya que el comportamiento del dispositivo y las capacidades del firmware pueden cambiar con el tiempo.

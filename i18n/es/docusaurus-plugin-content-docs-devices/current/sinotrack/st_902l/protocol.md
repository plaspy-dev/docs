---
slug: /sinotrack/st_902l/protocol
id: st_902l-protocol
sidebar_label: Protocol
title: SinoTrack - ST-902L Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el SinoTrack ST-902L con Plaspy usando ajustes de servidor compartidos y opciones de transporte
keywords:
  - Protocolo SinoTrack ST 902L
  - Protocolo GPS ST 902L
  - Compatibilidad SinoTrack Plaspy
  - Protocolo de comunicación ST 902L
  - Protocolo rastreador OBD II
  - Protocolo rastreador GPS 4G
  - Protocolo de rastreo de vehículos
  - Rastreo de flotas Plaspy
  - Configuración de servidor para rastreador GPS
  - Reporte de alarmas del rastreador
---

# SinoTrack - Protocolo ST-902L

Esta página describe el contexto público del protocolo para usar el SinoTrack ST-902L con la plataforma Plaspy. Se enfoca en cómo se comunica el dispositivo a alto nivel, cómo apuntarlo a Plaspy y qué esperar de los ajustes de conexión compartidos que ofrece la plataforma. El objetivo es brindar contexto práctico sobre el protocolo sin entrar en datos internos sensibles del dispositivo.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo cuando un dispositivo reporta al endpoint de ingestión de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración y la resolución de problemas deben considerar esas variables.

## Resumen del protocolo

El protocolo del ST-902L define las reglas para que el rastreador envíe datos de ubicación, telemetría y alarmas a un servidor remoto. En términos prácticos para la integración con Plaspy, el protocolo especifica cómo el dispositivo se identifica, cómo reporta posiciones y cómo comunica eventos para que Plaspy pueda mostrar y actuar sobre esos datos.

- Permite que el rastreador transmita fijaciones GPS y telemetría del vehículo a un servidor remoto para su ingestión.
- Transporta notificaciones de eventos como violaciones de geocerca, exceso de velocidad, impactos y batería baja hacia sistemas posteriores.
- Proporciona datos de identificación del dispositivo para que Plaspy asocie los mensajes entrantes con el activo correcto.
- Admite la configuración de la dirección del servidor y el transporte para apuntar el dispositivo a Plaspy y usarlo de inmediato.
- Permite alternativas como SMS para la provisión inicial y la configuración del APN cuando la conexión de datos móviles aún no está configurada.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único endpoint de ingestión compartido y en un puerto para las conexiones entrantes de los rastreadores, y usa ese endpoint para detectar el protocolo automáticamente. Cuando un ST-902L se configura para reportar a Plaspy, la plataforma puede reconocer el tipo de dispositivo y mapear los datos entrantes con el registro correcto sin que el usuario seleccione manualmente el protocolo.

- Apunte la configuración del servidor del dispositivo a d.plaspy.com o a la dirección de ingestión de Plaspy y la plataforma aceptará los reportes.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración en flotas.
- Cuando el dispositivo reporta al endpoint de Plaspy, la detección automática asocia la transmisión entrante con los parsers y registros de dispositivo correspondientes.
- Generalmente usted no necesita elegir un protocolo dentro de Plaspy si el rastreador está correctamente configurado para reportar al endpoint de Plaspy.
- Confirme el registro del dispositivo en Plaspy después de apuntar el ST-902L a la plataforma para asegurar que los datos aparezcan como se espera.

## Transporte y contexto de conexión

El ST-902L puede enviar datos a través de redes celulares y admite opciones de transporte comunes. Para la integración con Plaspy, deberá configurar el dispositivo para usar la dirección del servidor y el transporte que se ajusten a su despliegue y condiciones de red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Los dispositivos pueden apuntarse al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 cuando se prefiera una IP directa para la provisión.
- Plaspy usa el puerto 8888 para ingestión y mantiene el mismo puerto en todos los dispositivos compatibles para consistencia.
- Elija UDP para reportes livianos cuando esté soportado, o TCP si el rastreador prefiere una conexión persistente y comportamientos de entrega garantizada.
- Asegúrese de que el APN y la SIM del dispositivo estén activos y de que el operador permita el transporte seleccionado hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar comandos disponibles, frecuencia de mensajes o comportamiento en el reporte de eventos; siempre anote la versión de firmware al solucionar problemas.
- Revisión de hardware o variantes regionales pueden modificar las bandas de radio soportadas, opciones de transporte o funciones opcionales.
- Los métodos de configuración del fabricante, como comandos SMS o un portal de provisión inicial, se usan con frecuencia para establecer APN, dirección del servidor y transporte.
- La selección del transporte (UDP vs TCP) debe coincidir con lo que el firmware del dispositivo soporte y lo que el operador permita.
- Valide la compatibilidad confirmando que el dispositivo puede alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 y que los reportes aparecen en Plaspy tras la configuración.
- Mantenga un registro del IMEI del dispositivo y de la versión de firmware para soporte y gestión a largo plazo de la flota.

## Por qué es importante entender el protocolo

Comprender claramente cómo se comunica el ST-902L facilita la configuración exitosa, el funcionamiento confiable y la resolución eficiente de problemas al usar Plaspy. Saber qué opciones de conexión y comportamientos de reporte emplea el rastreador reduce errores de configuración y acelera el diagnóstico cuando los datos no llegan como se espera.

- Garantiza que se apliquen correctamente el APN y los ajustes del servidor para que los datos lleguen a Plaspy de forma confiable.
- Ayuda a elegir el modo de transporte y la configuración del operador apropiados para una conectividad estable.
- Facilita la interpretación del tiempo de eventos, intervalos de latido y activadores de alarma en Plaspy.
- Reduce el tiempo en soporte al orientar las comprobaciones de firmware y los pasos de verificación de configuración.
- Favorece un despliegue de flota consistente al documentar los pasos exactos de provisión para cada vehículo.

## Por qué usar Plaspy con este protocolo

Usar el SinoTrack ST-902L con Plaspy ofrece a gestores de flotas y propietarios de vehículos una vía directa hacia el seguimiento en tiempo real, la gestión de alarmas y el análisis histórico de rutas sin necesidad de reconfiguraciones extensas ni servidores personalizados. La forma OBD II del ST-902L y las opciones de configuración por SMS lo hacen práctico para provisionar dispositivos y apuntarlos a Plaspy para obtener visibilidad inmediata en toda la flota.

Para más información sobre Plaspy y cómo la plataforma ingiere y muestra datos de dispositivo, consulte https://www.plaspy.com. Para detalles más actuales sobre protocolos específicos del dispositivo, comportamiento de firmware e instrucciones del fabricante, verifique la documentación oficial de SinoTrack en https://www.sinotrackgps.com/ ya que las implementaciones del dispositivo pueden cambiar con el tiempo.

---
slug: /istartek/vt110/protocol
id: vt110-protocol
sidebar_label: Protocol
title: iStartek - VT110 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el iStartek VT110 con Plaspy mediante configuración compartida y detección automática
keywords:
  - protocolo iStartek VT110
  - protocolo GPS iStartek VT110
  - compatibilidad VT110 Plaspy
  - protocolo de comunicación VT110
  - protocolo de rastreo VT110
  - rastreador GPS iStartek
  - integración de rastreadores Plaspy
  - protocolo de seguimiento de vehículos
  - rastreo de flotas VT110
  - telemetría VT110
---

# iStartek - Protocolo VT110

Esta página ofrece el contexto público del protocolo para usar el rastreador GPS iStartek VT110 con Plaspy. Resume cómo el dispositivo se comunica con Plaspy para reportes de posición, telemetría y alarmas de eventos sin exponer detalles sensibles de implementación. La información aquí está pensada para ayudar a gestores de flota, integradores y usuarios técnicos a comprender la relación de comunicación entre el VT110 y Plaspy.

Plaspy utiliza una configuración de conexión compartida entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en directrices públicas y prácticas más que en detalles internos de firmware.

## Resumen del protocolo

El VT110 transmite ubicación, telemetría y eventos a un endpoint backend donde Plaspy ingiere esos mensajes para mapas en tiempo real, alertas e historial. El protocolo de reporte define cómo el dispositivo se identifica, cómo se envían las actualizaciones periódicas y por evento, y cómo se transmiten los campos telemáticos comunes para que Plaspy pueda mostrarlos y procesarlos.

- Permite reportes periódicos y por evento de fijaciones de posición basadas en GNSS y GSM hacia el servidor.
- Transmite telemetría clave como kilometraje, rumbo, estado de IGN/ACC y condiciones de alarma para que Plaspy las interprete.
- Ofrece modos de reporte configurables en el dispositivo por tiempo, distancia, cambio de rumbo y umbrales de kilometraje.
- Soporta reportes de alarmas por geocerca, exceso de velocidad, pérdida de alimentación, batería baja, impacto y remolque que se integran en las alertas de Plaspy.
- Permite comandos remotos y activaciones de accesorios desde el servidor cuando el dispositivo y la configuración lo permiten.

## Cómo detecta Plaspy el protocolo

Plaspy recibe las conexiones entrantes en un endpoint y puerto compartidos y usa el tráfico del dispositivo para identificar el protocolo del rastreador de forma automática. En la mayoría de los casos, un VT110 correctamente configurado empezará a reportar a Plaspy sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- El endpoint público de Plaspy es accesible en el dominio d.plaspy.com y la IP del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy utilizan el mismo puerto y Plaspy escucha en el puerto 8888 para reportes de rastreadores.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del instalador.
- Cuando un VT110 apunta al endpoint de Plaspy y transmite sus reportes, Plaspy detectará e interpretará el protocolo automáticamente.
- Normalmente, usted sólo debe asegurarse de que la configuración de reporte del dispositivo coincida con el endpoint y el transporte de Plaspy; la selección manual del protocolo no suele ser necesaria.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el VT110 alcanza a Plaspy más que el contenido de bajo nivel de los paquetes. Una configuración de transporte correcta es esencial para la entrega fiable de datos de ubicación y alarmas desde el rastreador a Plaspy.

- El VT110 puede configurarse para reportar usando UDP o TCP en el puerto 8888 para alcanzar Plaspy.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 según las opciones de provisión.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración en una flota mixta.
- Elija UDP cuando se prefiera baja latencia y sobrecarga mínima y las condiciones de red sean estables; elija TCP cuando sea necesaria una entrega fiable y ordenada y el dispositivo lo soporte.
- Asegúrese de que los ajustes de la SIM móvil, como el APN, estén correctos para que el VT110 pueda establecer conectividad GPRS con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre lotes de producción del VT110 pueden modificar las opciones de reporte disponibles y el comportamiento de las alarmas; siempre confirme la versión de firmware al solucionar problemas.
- Las revisiones de hardware y accesorios opcionales (sensores de combustible, lectores RFID, relés) influyen en qué campos de telemetría se reportan a Plaspy.
- Los menús de configuración del fabricante pueden ofrecer entradas de servidor dual o conmutadores de transporte; use las configuraciones de endpoint de Plaspy según lo requiera su despliegue.
- La selección de transporte (UDP frente a TCP) es configurable en el dispositivo y puede afectar las características de entrega de mensajes según las condiciones de red.
- La detección automática de protocolo de Plaspy reduce la necesidad de selección manual, pero sigue siendo necesario configurar correctamente el endpoint del servidor y el transporte en el dispositivo.
- Valide la compatibilidad y la disponibilidad de funciones con la documentación de iStartek y las notas de la versión de firmware al planear implementaciones.

## Por qué es importante entender el protocolo

Conocer los fundamentos del protocolo de comunicación ayuda a garantizar una integración fluida del VT110 con Plaspy y mejora la disponibilidad operativa, la resolución de problemas y la calidad de los datos.

- Configuración más rápida confirmando que el dispositivo apunta a d.plaspy.com o 54.85.159.138 y usa el puerto 8888 con el transporte deseado.
- Mejor diagnóstico al saber si un equipo envía reportes periódicos o solo mensajes por evento.
- Manejo de alarmas más efectivo al alinear la configuración de alarmas del dispositivo con los flujos de alertas y notificaciones de Plaspy.
- Planificación de red más inteligente al elegir UDP o TCP según la cobertura y las necesidades de confiabilidad de su flota.
- Planificación de firmware y accesorios más sencilla porque puede correlacionar la disponibilidad de funciones con los campos del protocolo que Plaspy espera.

## Por qué usar Plaspy con este protocolo

Usar el VT110 con Plaspy ofrece una opción telemática compacta y robusta para organizaciones que requieren rastreo en tiempo real consistente, gestión de alarmas y supervisión operativa. Plaspy ingiere fijaciones de posición derivadas de GNSS y GSM, kilometraje y reportes de eventos del VT110 para rellenar mapas en vivo, reportes históricos y canales de alertas usados por operaciones de flota y equipos de seguridad.

Para conocer más sobre cómo Plaspy funciona con una amplia variedad de rastreadores y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo, comportamiento de firmware e instrucciones del fabricante, por favor verifique la información actual en el sitio oficial de iStartek https://istartek.com/

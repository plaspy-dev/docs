---
slug: /queclink/gl200/configuration
id: gl200-configuration
sidebar_label: Configuration
title: QuecLink - GL200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GL200 con Plaspy, incluyendo servidor, comandos SMS y lista de verificación
keywords:
  - Configuración QuecLink GL200
  - Instalación QuecLink GL200
  - Configuración servidor GL200
  - Configuración GL200 Plaspy
  - Configuración rastreador QuecLink
  - Comandos SMS QuecLink GL200
  - Configuración APN GL200
  - Configuración rastreador GPS Plaspy
  - Instalación GPS QuecLink
  - Configuración software GL200
---

# QuecLink - GL200 Configuration

Esta página documenta el contexto público de configuración para usar el rastreador QuecLink GL200 con Plaspy. Resume los ajustes de servidor que Plaspy utiliza, los comandos SMS públicos comunes para configurar el GL200 y los pasos típicos que usted seguirá para preparar el dispositivo y que reporte al servicio Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Las instrucciones y herramientas del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y el proveedor. El GL200 suele admitir configuración por SMS; aquí encontrará ejemplos públicos de comandos SMS y cómo esos comandos se relacionan con los ajustes del servidor de Plaspy y con un flujo de configuración estándar.

## Resumen de configuración

Configurar el GL200 para Plaspy prepara el dispositivo para comunicarse de forma fiable con los servidores Plaspy y garantiza que la ubicación y los eventos sean visibles en el panel de Plaspy. El flujo público de configuración suele usar comandos SMS para establecer el APN, los endpoints del servidor y los intervalos de reporte; los comandos que se muestran abajo son un ejemplo documentado y deben adaptarse a su SIM y entorno.

- Configure el dispositivo para que reporte al endpoint compartido de Plaspy y así la unidad aparezca en la plataforma.
- Establezca el APN y credenciales del operador móvil para que el dispositivo pueda abrir sesiones GPRS.
- Ajuste el intervalo de reporte según sus necesidades de monitoreo y su plan de datos.
- Valide la selección de transporte (UDP o TCP) y el puerto configurado para que Plaspy reciba los paquetes.
- Active entradas o alertas relevantes, por ejemplo SOS, para asegurar que los eventos lleguen a Plaspy.
- Use las herramientas del fabricante o comandos SMS para guardar y aplicar los ajustes, y luego verifique el reporte correcto hacia Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be selected on the device
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Una unidad GL200 con alimentación y con capacidad SMS y GPRS habilitadas para permitir la configuración vía SMS.
- Una tarjeta SIM activa con datos disponibles y los valores APN del operador listos para ingresarse.
- Acceso al método de configuración por SMS del dispositivo o a la herramienta oficial y documentación de QuecLink.
- Conocimiento de la contraseña del dispositivo usada en los comandos SMS; los ejemplos públicos usan la contraseña predeterminada queclink.
- Un plan para probar la conectividad y validar que el dispositivo reporte al servidor de Plaspy tras la configuración.
- Anote el transporte preferido (UDP o TCP) para su despliegue en caso de que el dispositivo requiera selección explícita.

## Cómo se conecta este rastreador a Plaspy

El GL200 se configura para enviar datos por GPRS al endpoint y puerto compartido de Plaspy, de modo que Plaspy pueda procesar los reportes de ubicación y eventos del dispositivo. Una vez que el dispositivo apunte a d.plaspy.com (o a la IP de Plaspy) en el puerto 8888 y los ajustes se guarden, Plaspy detectará automáticamente el protocolo del rastreador y comenzará a procesar los mensajes.

- El dispositivo envía actualizaciones periódicas de posición y mensajes de evento a d.plaspy.com en el puerto 8888.
- Plaspy recibe paquetes por UDP o TCP según la selección de transporte del dispositivo.
- La detección automática de protocolos en Plaspy asigna los mensajes entrantes al protocolo de rastreador correcto.
- Eventos como SOS o activaciones de entradas reportados por el dispositivo se reenvían a Plaspy para alertas e historial.
- Una vez validado el reporte, la unidad aparece en Plaspy para seguimiento en tiempo real y revisión de rutas históricas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de QuecLink o prepare el envío de comandos SMS según la guía del fabricante.
2. Ingrese la dirección del servidor Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Si el dispositivo lo requiere, elija UDP o TCP como transporte.
5. Configure el APN, usuario y contraseña de la SIM instalada para que el dispositivo pueda conectarse por GPRS.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si la documentación del equipo lo exige.
7. Valide que el dispositivo reporte a Plaspy revisando la actividad en la plataforma y confirmando actualizaciones de ubicación y eventos.
8. Si no aparece el reporte, revise las respuestas SMS, verifique la conectividad de la SIM y confirme que el APN y la configuración del servidor sean correctos.

## Ejemplo de comandos de configuración

El GL200 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos son un ejemplo público documentado. Las muestras usan la contraseña del dispositivo queclink como contraseña para comandos SMS. El comando de restauración de fábrica se usa con frecuencia como paso inicial cuando es necesario; trátelo como opcional y úselo solo si requiere restaurar la unidad a estado de fábrica.

1. Restore factory settings (optional initial step)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders with your operator values)
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] es el nombre APN del operador
- [apnu] es el usuario APN si el operador lo requiere
- [apnp] es la contraseña APN si el operador lo requiere

4. Set the GPRS server to report to Plaspy (domain and IP included)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando incluye tanto d.plaspy.com como la IP 54.85.159.138 y establece el puerto 8888; Plaspy usa el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador.

5. Set the reporting interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification (input 2)
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Nota: Envíe cada comando como un SMS individual al dispositivo siguiendo las reglas de formato de comandos SMS de QuecLink. Mantenga la contraseña predeterminada queclink si el dispositivo aún está en valores de fábrica o reemplace la contraseña por la que usted haya configurado si ya fue cambiada.

## Notas de configuración

- La configuración por SMS es un método de uso común para el GL200; confirme en la documentación de QuecLink si las revisiones de firmware cambian la sintaxis de comandos.
- Elija UDP o TCP según sus consideraciones de red; Plaspy soporta ambos y detecta automáticamente el protocolo, pero la elección en el dispositivo afecta las características de entrega de paquetes.
- Confirme siempre el APN, usuario y contraseña con su operador móvil antes de enviar comandos APN.
- Aplicar una restauración de fábrica es opcional y eliminará ajustes personalizados previos; úsela solo cuando sea necesario.
- Dado que el firmware y las herramientas pueden actualizarse, guarde una copia de los comandos aplicados y confirme el comportamiento después de un reinicio.

## Por qué usar Plaspy con esta configuración

Apuntar el QuecLink GL200 a Plaspy usando los ajustes de servidor compartidos ofrece una vía sencilla hacia la visibilidad centralizada, gestión de eventos y análisis de rutas históricas. Para organizaciones que requieren protección de activos, recuperación anti-robo o seguimiento operativo, configurar el GL200 para que reporte a d.plaspy.com en el puerto 8888 permite a Plaspy ingerir los reportes del dispositivo y ponerlos a disposición para monitoreo y respuesta ante incidentes.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los comandos específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, así que verifique las instrucciones y la sintaxis de comandos más recientes en el sitio de QuecLink https://www.queclink.com/ antes de aplicar ajustes en producción.

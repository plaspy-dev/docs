---
slug: /minifinder/nano/configuration
id: nano-configuration
sidebar_label: Configuration
title: MiniFinder - Nano Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del MiniFinder Nano para Plaspy, con ajustes de servidor, marcadores APN y ejemplos de SMS
keywords:
  - Configuración MiniFinder Nano
  - Instalación MiniFinder Nano
  - MiniFinder Nano Plaspy
  - Configuración rastreador GPS MiniFinder Nano
  - Ajustes servidor MiniFinder Nano
  - Configuración APN MiniFinder Nano
  - Configuración dispositivo Plaspy
  - Configuración servidor Plaspy
  - Configuración rastreador GPS portátil
  - Configuración rastreador de seguridad personal
---

# MiniFinder - Configuración del Nano

Esta página describe el contexto público de configuración para usar el MiniFinder Nano con Plaspy. Explica los ajustes prácticos de servidor y los pasos comunes para apuntar un Nano a Plaspy, de modo que las posiciones, alertas SOS y eventos del dispositivo lleguen a la plataforma. Cuando están disponibles, se muestran los comandos SMS públicos del fabricante para facilitar un flujo de trabajo práctico de configuración.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que los ejemplos aquí se centran en los valores públicos requeridos por Plaspy y en pasos prácticos que usted puede seguir al configurar un Nano.

## Resumen de la configuración

Configurar un MiniFinder Nano para Plaspy implica preparar el dispositivo para enviar información de ubicación, alarmas y estado al endpoint del servidor Plaspy, de modo que la plataforma pueda recibir, decodificar y mostrar la telemetría. La configuración pública típicamente define la zona horaria del dispositivo, el APN para datos móviles y el endpoint GPRS (dominio o IP) con puerto y tipo de transporte.

- Ajuste la zona horaria y el reloj del dispositivo según sus requisitos de reporte.
- Configure los parámetros APN para que la eSIM o la SIM permita el acceso a datos móviles.
- Apunte el dispositivo al endpoint del servidor Plaspy d.plaspy.com o a la dirección IP equivalente y use el puerto compartido.
- Seleccione el transporte (UDP o TCP) si el firmware del dispositivo lo requiere.
- Valide la conectividad para que el dispositivo aparezca en Plaspy y envíe posiciones y alertas periódicas.
- Use la configuración por SMS si el fabricante proporciona comandos SMS, o utilice la herramienta oficial de MiniFinder según corresponda.

## Ajustes del servidor Plaspy

- Dominio del servidor Plaspy d.plaspy.com
- IP del servidor Plaspy 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un MiniFinder Nano cargado y operativo con acceso a los SMS del dispositivo o al portal de configuración del fabricante
- Datos celulares activos en la eSIM del Nano o en la SIM insertada y credenciales APN correctas
- Nombre del APN y, opcionalmente, usuario y contraseña del APN si su operador los requiere
- Acceso a la documentación de MiniFinder o al software de instalación para la revisión de firmware específica del Nano
- Permiso para agregar o monitorear el dispositivo en su cuenta o flota de Plaspy
- Herramientas básicas para enviar mensajes SMS al dispositivo si utiliza configuración por SMS

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el Nano envía posiciones, eventos de alarma (por ejemplo SOS o detección de caída) y actualizaciones de estado al endpoint del servidor Plaspy en el puerto compartido, de modo que Plaspy pueda ingerir y mostrar esos datos en paneles y notificaciones. Use los valores públicos del servidor Plaspy para asegurar que la telemetría del dispositivo llegue al destino correcto.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138
- Toda la comunicación se envía al puerto 8888 que Plaspy utiliza para los dispositivos soportados
- Puede escoger UDP o TCP como transporte cuando el dispositivo requiera una selección
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica la telemetría entrante
- Una vez validado el reporte, Plaspy mostrará ubicación, alarmas y marcas de tiempo para monitoreo e informes

## Flujo de trabajo de configuración común

1. Acceda al método oficial de configuración de MiniFinder para el Nano (comandos SMS, portal web o herramienta de instalador según el firmware).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o use la IP del servidor 54.85.159.138 según corresponda.
3. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
4. Elija UDP o TCP como transporte si el dispositivo requiere esta selección.
5. Configure el APN usando los valores de su operador para que el Nano tenga conectividad de datos.
6. Aplique o guarde la configuración en la herramienta del dispositivo o envíe los comandos SMS necesarios.
7. Reinicie el dispositivo si la documentación del fabricante indica que es necesario para aplicar los ajustes.
8. Valide que el dispositivo reporte a Plaspy confirmando que aparece en su cuenta de Plaspy y envía mensajes de posición o alarma.

## Ejemplos de comandos de configuración

El MiniFinder Nano puede configurarse por SMS según los comandos públicos que muestra el fabricante. Envíe estos mensajes en el orden indicado cuando realice una configuración por SMS. Mantenga los marcadores APN tal como aparecen y reemplácelos con los valores de su operador.

- Establecer la zona horaria a UTC 0
```
tz+00
```

- Configurar el APN del operador (reemplace [apn] con su APN; incluya [apnu] y [apnp] solo si su proveedor requiere usuario y contraseña)
```
S1,[apn],[apnu],[apnp]
```
Explicación: S1 establece el APN primario. Si su operador no requiere usuario o contraseña, puede enviar S1,[apn] sin los marcadores adicionales.

- Configurar el servidor GPRS a Plaspy por IP y puerto
```
IP1,54.85.159.138,8888
```
Notas: El fabricante también permite entradas de dominio en algunas herramientas. Como alternativa use d.plaspy.com cuando el dispositivo soporte configuración por dominio en lugar de una IP. Plaspy acepta tanto el dominio d.plaspy.com como la IP 54.85.159.138 en el puerto 8888. Seleccione UDP o TCP como transporte si la interfaz del dispositivo lo requiere.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los comandos o el comportamiento de los SMS; siempre confirme la sintaxis para la revisión de firmware de su Nano.
- La configuración por SMS es una opción pública común mostrada por MiniFinder, pero también pueden existir herramientas del vendedor o portales de gestión remota para el Nano.
- Cuando el dispositivo requiere la selección de transporte, pruebe ambos modos UDP y TCP si encuentra problemas de entrega; Plaspy soporta ambos transportes y detecta automáticamente el protocolo del dispositivo al recibir datos.
- Preserve los marcadores APN como [apn], [apnu] y [apnp] al redactar comandos y sustitúyalos por las credenciales de su operador móvil.
- Mantenga el dispositivo alimentado y asegúrese de la conectividad celular durante la configuración para que el rastreador pueda registrarse y transmitir de inmediato.

## Por qué usar Plaspy con esta configuración

Usar el MiniFinder Nano con Plaspy ayuda a las organizaciones a centralizar la telemetría de seguridad personal, las alertas SOS y el historial de ubicaciones en una sola plataforma de monitoreo. La forma wearable del Nano y su posicionamiento híbrido complementan los paneles y reglas de notificación de Plaspy, proporcionando a cuidadores y equipos operativos conciencia situacional inmediata y un registro de auditoría de eventos.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, notas de firmware y comandos oficiales más actuales consulte MiniFinder en https://minifinder.se/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.

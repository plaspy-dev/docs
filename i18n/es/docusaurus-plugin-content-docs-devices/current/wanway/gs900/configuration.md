---
slug: /wanway/gs900/configuration
id: gs900-configuration
sidebar_label: Configuration
title: WanWay - GS900 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del WanWay GS900 con ajustes de servidor Plaspy y comandos SMS para integración
keywords:
  - configuración WanWay GS900
  - instalación WanWay GS900
  - configuración GS900 Plaspy
  - configuración rastreador WanWay
  - configuración GPS vehículo
  - configuración servidor GS900
  - instalación rastreador GPS GS900
  - configuración rastreador Plaspy
  - configuración seguimiento vehicular
  - configuración GPS flota
---

# WanWay - GS900 Configuración

Esta página documenta el contexto público de configuración para usar el WanWay GS900 con Plaspy. Recopila los ajustes prácticos enfocados en la plataforma y ejemplos de comandos SMS publicados para el GS900, de modo que usted pueda preparar el dispositivo para enviar ubicación y eventos al endpoint compartido de servidor de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GS900 soporta configuración por SMS y parámetros de servidor GPRS; esta guía muestra cómo esos comandos públicos se relacionan con los valores de servidor de Plaspy y el flujo típico para validar la conectividad.

## Resumen de la configuración

Configurar el GS900 para Plaspy implica preparar el equipo para que alcance el endpoint compartido de Plaspy, activar el reporte por GPRS y verificar que los mensajes de posición y eventos lleguen a la plataforma. Cuando los comandos del fabricante están disponibles, el SMS es un método común para ajustar servidor, APN e intervalo de reporte.

- Configure el APN del dispositivo para que el GS900 pueda establecer conectividad de datos GPRS hacia Plaspy.
- Configure la dirección y puerto del servidor GPRS para apuntar el rastreador a Plaspy.
- Active el modo de reporte por GPRS para que el rastreador envíe telemetría por la red móvil.
- Establezca un intervalo de reporte adecuado para equilibrio entre seguimiento en tiempo real y ahorro de energía.
- Valide la conectividad usando los comandos de consulta de estado y parámetros del dispositivo.
- Confirme que el dispositivo aparece y reporta correctamente en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos compatibles

## Requisitos típicos antes de la configuración

- Una unidad GS900 alimentada y accesible instalada o disponible para configuración por SMS.
- Una tarjeta SIM funcional con datos activos y el APN correcto del operador.
- Capacidad para enviar comandos SMS al dispositivo o usar la herramienta oficial de configuración de WanWay si está disponible.
- Conocimiento de las credenciales APN si el operador requiere usuario o contraseña para GPRS.
- Acceso básico a la cuenta y registro del dispositivo en Plaspy para verificar que el equipo aparezca en la plataforma.
- Un plan para probar la conectividad y la telemetría una vez aplicados los ajustes del servidor.

## Cómo se conecta este rastreador a Plaspy

El GS900 se configura para enviar su posición y mensajes de evento al endpoint y puerto compartido de Plaspy. Una vez que el GPRS está activo y los parámetros de servidor apuntan a Plaspy, el rastreador envía telemetría periódica y notificaciones de eventos que Plaspy recibe y transforma en actualizaciones de mapa en vivo, alertas e informes.

- El dispositivo usa el APN configurado para establecer una sesión de datos GPRS hacia Plaspy.
- La configuración del servidor apunta el rastreador a d.plaspy.com (o la IP del servidor Plaspy) en el puerto 8888.
- Los mensajes de telemetría y eventos se envían por UDP o TCP según la selección de transporte del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes al registro de dispositivo correcto.
- Tras la entrega exitosa de datos, Plaspy muestra la ubicación en vivo, notificaciones de alarma e informes basados en intervalo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración WanWay para su unidad GS900, como comandos SMS o software del fabricante.
2. Ingrese el destino del servidor de Plaspy usando ya sea el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 para que los mensajes lleguen al endpoint compartido de Plaspy.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte; Plaspy soporta ambos en el puerto 8888.
5. Aplique o guarde la configuración en el rastreador (para SMS esto implica enviar el comando y esperar confirmación).
6. Reinicie o apague y encienda el dispositivo si las instrucciones del fabricante lo requieren para aplicar los ajustes.
7. Valide que el dispositivo reporta a Plaspy verificando el estado en línea, actualizaciones recientes de posición o consultando el estado del rastreador.

## Comandos de configuración de ejemplo

El GS900 soporta configuración por SMS. A continuación están los comandos SMS públicos extraídos del contenido de configuración provisto por el fabricante, conservados en su orden. Envíe cada comando como SMS al número del dispositivo usando el número de instalador o administrador autorizado.

1. Configure el APN del operador. Reemplace [apn] con el APN de su operador. Si su operador requiere usuario y contraseña para el APN, suministre [apnu] y [apnp] según sea necesario.
```
APN,[apn]#
```
o, si se requiere usuario y contraseña:
```
APN,[apn],[apnu],[apnp]#
```

2. Establezca el servidor GPRS para apuntar el rastreador a Plaspy. Esto usa el dominio del servidor Plaspy y el puerto 8888.
```
SERVER,1,d.plaspy.com,8888,0#
```
(Alternativamente puede usar la IP del servidor 54.85.159.138 si el dispositivo lo requiere.)

3. Configure el intervalo de reporte/actualización. El ejemplo a continuación establece reportes periódicos; ajuste los valores según su política.
```
TIMER,60,60#
```

4. Active el modo de reporte por GPRS para que el rastreador envíe datos vía GPRS.
```
GPRSON,1#
```

5. Verifique los parámetros de configuración actuales en el rastreador.
```
PARAM#
```

6. Consulte el estado actual del rastreador.
```
STATUS#
```

Nota: Conserve los marcadores de posición [apn], [apnu] y [apnp] y reemplácelos con el APN, usuario y contraseña específicos del operador durante la configuración.

## Observaciones de configuración

- Los comandos por SMS anteriores son ejemplos públicos; algunas revisiones de firmware o variantes regionales del GS900 pueden requerir una sintaxis de comando ligeramente distinta. Verifique siempre la sintaxis con la documentación oficial de WanWay antes de un despliegue masivo.
- La elección entre UDP o TCP afecta el comportamiento del transporte; pruebe ambos modos si observa conectividad intermitente. Plaspy admite ambos transportes en el puerto compartido 8888.
- Si prefiere herramientas de configuración por software o cable de WanWay, utilice la herramienta oficial para la provisión masiva y para administrar opciones dependientes del firmware.
- Los valores de APN, usuario y contraseña son específicos del operador; introducir datos incorrectos impedirá la conexión GPRS a Plaspy.
- Confirme que el dispositivo esté registrado correctamente en su cuenta de Plaspy y que los identificadores enviados por el rastreador coincidan con el registro del dispositivo en la plataforma.

## Por qué usar Plaspy con esta configuración

Configurar el WanWay GS900 para reportar a Plaspy ofrece a las organizaciones una vía sencilla hacia la visibilidad centralizada de vehículos. Con el GS900 proporcionando ubicación, estado de encendido, kilometraje y eventos de manipulación, Plaspy puede mostrar posiciones en tiempo real, disparar alertas, generar informes y soportar flujos operativos remotos para flotas o vehículos individuales.

Para obtener más información sobre Plaspy y cómo recibe datos de rastreadores compatibles, visite https://www.plaspy.com. Para la sintaxis más reciente de comandos específicos del dispositivo, notas de firmware y variantes regionales del WanWay GS900, verifique los detalles en el sitio del fabricante https://www.wanwaytech.net/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.

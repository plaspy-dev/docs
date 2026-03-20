---
slug: /tk_star/tk208/configuration
id: tk208-configuration
sidebar_label: Configuration
title: TK-Star - TK208 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TK-Star TK208 y conectarlo a Plaspy con ajustes de servidor compartido y comandos SMS
keywords:
  - configuración TK-Star TK208
  - configuración TK208 Plaspy
  - configuración servidor TK208
  - configuración rastreador TK-Star
  - comandos SMS TK208
  - integración rastreador Plaspy
  - configuración plataforma GPS
  - configuración rastreador portátil
  - configuración GPRS rastreador
  - configuración software de rastreo
---

# TK-Star - TK208 Configuración

Esta página describe la configuración pública para usar el TK-Star TK208 con la plataforma Plaspy. Reúne los pasos prácticos y los valores de servidor disponibles públicamente que permiten que un TK208 reporte a Plaspy, además de indicar qué verificar antes de la integración. Cuando se muestran comandos del fabricante, se incluyen como referencia para que pueda aplicarlos directamente o adaptarlos a su flujo de aprovisionamiento.

Plaspy usa ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para aplicar los valores comunes y públicos de configuración para Plaspy, y confirme el comportamiento específico del dispositivo con la documentación de TK-Star cuando sea necesario.

## Resumen de configuración

El TK208 debe configurarse para enviar datos de ubicación y eventos por GPRS a Plaspy para que el dispositivo aparezca y reporte correctamente en su cuenta Plaspy. Este proceso prepara la configuración de red del equipo, el intervalo de reporte y el servidor destino para que Plaspy pueda ingerir telemetría y generar mapas, alertas e historial de rutas.

- Configure el APN y las credenciales para que el TK208 pueda acceder a Internet a través de la red celular.
- Apunte el TK208 al endpoint y puerto del servidor de Plaspy para que los datos de ubicación lleguen a la plataforma.
- Ajuste el intervalo de subida y el modo de reporte para equilibrar frecuencia de actualizaciones y consumo de batería.
- Verifique la conectividad y confirme que el dispositivo reporte a Plaspy para que aparezca en mapas y paneles.
- Aplique los comandos SMS provistos o utilice la herramienta del fabricante según corresponda para configurar el equipo in situ o de forma remota.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la configuración

- Un TK208 con batería y accesible, con una tarjeta SIM activa que tenga datos y SMS habilitados.
- APN, usuario APN y contraseña APN del operador celular (si son requeridos).
- Capacidad para enviar comandos SMS al dispositivo o usar la herramienta del fabricante según su preferencia de despliegue.
- Acceso a la contraseña por defecto del dispositivo o credenciales de administrador (los ejemplos a continuación usan la contraseña pública documentada 123456).
- Un plan breve de validación para confirmar que el dispositivo aparece y reporta en Plaspy tras la configuración.
- Documentación del fabricante o contacto de soporte para verificar la sintaxis de comandos según firmware si es necesario.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el TK208 usa GPRS celular para reenviar posiciones GNSS y mensajes de evento al endpoint del servidor de Plaspy. Plaspy procesa los mensajes del dispositivo y mapea la posición, eventos y datos de estado en seguimiento en tiempo real, alertas e historial de rutas para monitoreo e informes.

- El rastreador se configura para enviar datos al endpoint de Plaspy en d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Plaspy acepta transporte TCP o UDP; elija el modo que su firmware y red soporten o requieran.
- Plaspy detecta automáticamente el protocolo del dispositivo y procesa los mensajes entrantes para que los equipos aparezcan en la plataforma sin configuración de protocolo por dispositivo.
- Eventos del equipo como SOS, alertas por movimiento y disparos de geocerca se envían a Plaspy como eventos para alertas e informes.
- Los intervalos de reporte y el modo GPRS determinan la frecuencia de las actualizaciones en Plaspy e influyen en el consumo de batería.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de TK-Star para su modelo, como comandos SMS, la herramienta del fabricante o el software de aprovisionamiento del proveedor.
2. Configure d.plaspy.com o la IP del servidor 54.85.159.138 como la dirección del servidor GPRS según el formato de comando del dispositivo.
3. Establezca el puerto 8888 para la conexión al servidor. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Configure la información del APN y cualquier usuario o contraseña APN opcional que requiera la SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo reporta correctamente a Plaspy comprobando estado y posiciones recientes en la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son ejemplos públicos proporcionados por el fabricante para el TK208. Se muestran en el orden recomendado para la configuración inicial. El ejemplo usa la contraseña por defecto 123456 en cada comando. Si la contraseña de su dispositivo es distinta, reemplace 123456 por su contraseña.

1. Restauración de fábrica opcional inicial (usar solo si necesita resetear ajustes)
```
begin123456
```
2. Configurar el APN del operador (reemplazar {{apn}} por el APN de su operador)
```
apn123456 {{apn}}
```
3. Configurar el usuario APN (reemplazar {{apnu}} por el usuario APN si es requerido)
```
apnuser123456 {{apnu}}
```
4. Configurar la contraseña APN (reemplazar {{apnp}} por la contraseña APN si es requerida)
```
apnpasswd123456 {{apnp}}
```
5. Establecer el servidor GPRS a Plaspy por IP y puerto
```
adminip123456 54.85.159.138 8888
```
Nota: Alternativamente puede apuntar el dispositivo al dominio d.plaspy.com si el rastreador acepta nombres de dominio en el comando adminip o equivalente.

6. Establecer el intervalo de subida a 60 segundos
```
upload123456 60
```
7. Cambiar el dispositivo a modo GPRS para que use el APN y servidor configurados
```
gprs123456
```

Explicación de los marcadores:
- {{apn}} — la cadena APN de su operador móvil
- {{apnu}} — usuario APN si lo requiere el operador
- {{apnp}} — contraseña APN si lo requiere el operador

Mantenga el valor de la contraseña por defecto solo para pruebas o aprovisionamiento inicial. Reemplácela por la contraseña de su dispositivo si se cambió desde la configuración de fábrica.

## Notas de configuración

- Las diferencias de firmware y revisiones de hardware pueden modificar la sintaxis exacta de los comandos y las opciones disponibles; consulte la documentación de TK-Star para comportamientos específicos por firmware.
- El TK208 soporta configuración vía SMS como se muestra arriba; algunos instaladores prefieren la herramienta de PC del fabricante o el aprovisionamiento del proveedor para despliegues masivos.
- Elija UDP o TCP según la fiabilidad de la red y las recomendaciones del firmware del dispositivo; Plaspy aceptará cualquiera de los dos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Usar la IP del servidor directamente (54.85.159.138) puede evitar problemas de resolución DNS, pero apuntar a d.plaspy.com también está soportado cuando el dispositivo acepta dominios.
- Verifique las credenciales APN y confirme que la SIM puede establecer una sesión GPRS antes de esperar que los datos aparezcan en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el TK-Star TK208 para reportar a Plaspy ofrece una forma sencilla de capturar ubicación en tiempo real, alertas de movimiento y datos de eventos en una sola plataforma. Para equipos que gestionan seguridad personal, protección de activos o seguimiento de flotas ligeras, usar los ajustes de servidor compartido de Plaspy reduce la complejidad por dispositivo y facilita que los equipos comiencen a reportar rápidamente una vez aplicados el APN y los valores de servidor.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y boletines técnicos verifique la información actual en el sitio del fabricante https://www.tk-star.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

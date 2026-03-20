---
slug: /tramigo/t23/configuration
id: t23-configuration
sidebar_label: Configuration
title: Tramigo - T23 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Tramigo T23 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración Tramigo T23
  - Instalación Tramigo T23
  - Tramigo T23 Plaspy
  - Configuración rastreador GPS Tramigo
  - Configuración servidor T23
  - Configuración SMS T23
  - Configuración rastreo de vehículos
  - Configuración rastreo de flotas
  - Configuración rastreador GPRS
  - Configuración rastreador Plaspy
---

# Tramigo - Configuración T23

Esta página describe el contexto público de configuración para usar el Tramigo T23 con la plataforma Plaspy. Explica los ajustes de servidor compartidos de Plaspy y muestra los comandos y pasos del fabricante que están disponibles públicamente para preparar un dispositivo T23 para reportar datos a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas de configuración que provea el proveedor. Cuando están disponibles, incluimos los comandos SMS del Tramigo T23 publicados en documentación pública para que pueda aplicarlos en el orden mostrado.

## Resumen del proceso de configuración

Este proceso prepara un Tramigo T23 para comunicarse de forma fiable con Plaspy ajustando los parámetros GPRS/APN del dispositivo y el endpoint del servidor Plaspy. En el T23, la configuración pública suele realizarse mediante comandos SMS para establecer el APN, el modo de reporte y la conexión al servidor GPRS.

- Configurar el APN del operador y las credenciales para que el T23 establezca una sesión de datos GPRS
- Configurar el dispositivo para reportar posiciones y latidos (heartbeat) a Plaspy
- Apuntar el dispositivo al endpoint y puerto del servidor Plaspy para que los datos lleguen a la plataforma
- Validar la conectividad del dispositivo y revisar la configuración mediante comandos de estado
- Asegurar el reporte persistente para que el rastreador aparezca en Plaspy y esté disponible para monitoreo

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará el protocolo del dispositivo automáticamente cuando este establezca conexión con el servidor.

## Requisitos típicos antes de la configuración

- Un dispositivo T23 encendido con una tarjeta SIM activa que tenga datos GPRS habilitados y capacidad de SMS
- Conocimiento del APN del operador móvil y, opcionalmente, del nombre de usuario y la contraseña del APN
- Acceso al método de configuración Tramigo como comandos SMS o la herramienta de configuración del proveedor
- Una cuenta en Plaspy y los datos de identificación del dispositivo necesarios para añadir el rastreador en la plataforma
- Herramientas básicas para enviar comandos SMS al dispositivo desde un teléfono o un gateway SMS si usa configuración por SMS

## Cómo se conecta este rastreador a Plaspy

El Tramigo T23 envía datos de posición y eventos del dispositivo al endpoint y puerto configurados de Plaspy usando GPRS. Después de ajustar el APN y la conexión al servidor, el rastreador establece una sesión de datos y transmite actualizaciones según las reglas de reporte configuradas en el dispositivo.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy
- El reporte de datos y eventos usa la conexión GPRS del dispositivo para llegar a Plaspy
- El dispositivo puede usar transporte TCP o UDP según la opción seleccionada durante la configuración
- Plaspy detectará automáticamente el protocolo del rastreador cuando se establezca la conexión
- Los mensajes regulares de estado y reporte permiten a Plaspy mostrar el dispositivo en la plataforma

## Flujo de configuración común

1. Acceda al método oficial de configuración Tramigo para el T23, como la interfaz de comandos SMS o el software del proveedor.  
2. Configure el APN del operador y las credenciales opcionales para que el dispositivo inicie GPRS. Ingrese el APN del operador en el formato requerido por el comando.  
3. Configure el dispositivo para usar d.plaspy.com o 54.85.159.138 como la dirección del servidor.  
4. Establezca el puerto del servidor en 8888.  
5. Elija UDP o TCP como transporte en el dispositivo si el método de configuración lo requiere.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige para aplicar los cambios.  
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en su cuenta Plaspy o usando el comando Status del dispositivo.

## Ejemplos de comandos de configuración

El Tramigo T23 ofrece un flujo de configuración por SMS en documentación pública. Los comandos siguientes se presentan en el orden en que comúnmente se aplican. Preserve los marcadores de posición al insertar las credenciales de su operador.

- Establecer el APN del operador y el nombre de usuario y contraseña opcionales
```text
GPRS,APN,[apn],[apnu],[apnp]
```
Explicación: Reemplace [apn] por el APN de su operador. Use [apnu] y [apnp] si su operador requiere nombre de usuario y contraseña del APN. Si no son necesarios deje los marcadores vacíos o omita si el dispositivo acepta una forma más corta.

- Activar el reporte FIND con intervalo de reporte de 1 minuto
```text
R,10,F,1,1,1,35
```
Explicación: Este comando configura el comportamiento de reporte. Mantenga el comando exactamente como lo proporciona la documentación de Tramigo.

- Desactivar respuesta ACK Ping
```text
Set,GPRSPingResponse,0
```

- Desactivar ACK de mensajes GPRS
```text
Set,GPRSMsgResponse,0
```

- Configurar el servidor GPRS con la IP y puerto de Plaspy y seleccionar el transporte
```text
GPRS,Connect,54.85.159.138,8888,tcp
```
Explicación: Este ejemplo usa la IP y el puerto del servidor Plaspy y selecciona tcp como transporte. Puede sustituir d.plaspy.com en lugar de la IP si lo prefiere, y elegir udp si el dispositivo y su instalación requieren UDP.

- Verificar ajustes
```text
Status
```
Explicación: El comando Status comprueba los parámetros actuales del dispositivo y se usa comúnmente para validar que el APN y los ajustes del servidor fueron aplicados.

## Notas sobre la configuración

- La configuración por SMS es un método público común para el T23. Use un teléfono o un gateway SMS que pueda enviar las cadenas de comando exactas.  
- Algunas versiones de firmware pueden aceptar nombres de dominio como d.plaspy.com en lugar de la IP. Use el formato que soporte el firmware de su dispositivo.  
- Elija TCP o UDP según la preferencia del instalador y la fiabilidad de la red. Plaspy soporta ambos en el mismo puerto y realiza detección automática del protocolo.  
- Confirme el APN, nombre de usuario y contraseña con su proveedor de SIM antes de aplicar los comandos, ya que ajustes incorrectos impiden la conexión GPRS.  
- Si el reporte no aparece en Plaspy después de la configuración, verifique la alimentación del dispositivo, el saldo de datos de la SIM y el registro GPRS antes de volver a aplicar comandos o reiniciar el dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Tramigo T23 con Plaspy le ofrece una vía clara para obtener visibilidad del vehículo y monitoreo operativo. Con los comandos SMS públicos y los ajustes de servidor compartidos de Plaspy, los técnicos pueden configurar los dispositivos de manera consistente para que reporten de forma fiable a la plataforma y permitan el seguimiento en tiempo real y el manejo de eventos.

Para obtener más información sobre Plaspy e integraciones de dispositivos compatibles visite https://www.plaspy.com. Para ver los comandos específicos más recientes, notas de firmware y detalles del fabricante, verifique la información actual en el sitio de Tramigo http://www.tramigo.net/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.

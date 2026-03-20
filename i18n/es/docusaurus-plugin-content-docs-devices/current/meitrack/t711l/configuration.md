---
slug: /meitrack/t711l/configuration
id: t711l-configuration
sidebar_label: Configuration
title: Meitrack - T711L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Meitrack T711L con el servidor Plaspy y comandos SMS de ejemplo
keywords:
  - Configuración Meitrack T711L
  - Instalación Meitrack T711L
  - Configuración servidor T711L
  - Configuración rastreador Plaspy
  - Configuración GPS
  - Instalación rastreador vehicular
  - Guía Meitrack
  - Comandos SMS T711L
  - Configuración GPRS T711L
  - Seguimiento de flotas Plaspy
---

# Meitrack - Configuración del T711L

Esta página documenta el contexto público de configuración para usar el Meitrack T711L con la plataforma Plaspy. Se enfoca en los ajustes prácticos del servidor y en los pasos habituales para preparar el dispositivo para que reporte su ubicación y estado a Plaspy. Cuando los comandos del fabricante son públicos, se incluyen ejemplos de SMS provistos por Meitrack para mayor comodidad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El T711L admite configuración por SMS y reporte por GPRS; los ejemplos a continuación siguen los formatos públicos de comandos de Meitrack para la configuración inicial.

## Resumen de la configuración

Este proceso prepara el T711L para comunicarse de forma fiable con Plaspy, apuntando el dispositivo al servidor de Plaspy, estableciendo un intervalo de reporte adecuado y habilitando la notificación de eventos necesaria para la visibilidad de la flota. Los pasos son prácticos y están pensados para técnicos o instaladores familiarizados con SMS o con la herramienta oficial de configuración de Meitrack.

- Apuntar el dispositivo al endpoint y al puerto del servidor Plaspy usados por todos los dispositivos
- Configurar el APN y los parámetros de transporte necesarios para el reporte por GPRS
- Fijar intervalos de actualización y notificaciones de eventos para asegurar visibilidad oportuna en Plaspy
- Verificar que el dispositivo reporte correctamente a Plaspy y aparezca en la plataforma
- Opcionalmente restaurar valores de fábrica o aplicar zona horaria y otras preferencias del dispositivo

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto 8888

## Requisitos típicos antes de la configuración

- Un Meitrack T711L instalado y con alimentación, dentro de cobertura de la red GSM
- Una tarjeta SIM operativa con datos móviles y capacidad SMS y el APN correspondiente
- Acceso al método oficial de configuración de Meitrack o a la interfaz por SMS
- Conocimiento de la contraseña que el dispositivo espera para configuración por SMS, por ejemplo la contraseña por defecto 0000 en ejemplos públicos
- Decisión sobre usar UDP o TCP según la preferencia del instalador
- Capacidad para verificar la conectividad consultando registros del servidor o la plataforma Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

El T711L se configura para enviar ubicación y eventos de dispositivo al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera y muestre los datos. Normalmente el rastreador usa GPRS para enviar paquetes periódicos de posición al servidor configurado en el dispositivo.

- El dispositivo envía paquetes de ubicación y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la selección del dispositivo y las restricciones de red
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los datos para su visualización
- Los intervalos de actualización y la configuración de eventos controlan la frecuencia de envío de reportes a Plaspy
- Un reporte exitoso hace que el dispositivo sea visible y operativo en la plataforma Plaspy

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Meitrack o prepárese para enviar comandos SMS desde un número autorizado
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor
3. Establezca el puerto del servidor en 8888, que es el puerto compartido usado por todos los dispositivos en Plaspy
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte
5. Configure el APN y cualquier credencial SIM necesaria para datos GPRS
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo lo requieren
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma

## Comandos de configuración de ejemplo

Los ejemplos de SMS siguientes se basan en formatos de comando públicos de Meitrack. El ejemplo usa la contraseña SMS del dispositivo 0000 que figura como predeterminada en la muestra pública. Reemplace {{apn}}, {{apnu}} y {{apnp}} con el APN de su operador, el usuario del APN y la contraseña del APN según corresponda.

Tenga en cuenta que el ejemplo establece el servidor GPRS usando la IP 54.85.159.138 y el puerto 8888. Si prefiere usar el dominio de Plaspy, verifique que su firmware acepte nombres de dominio en lugar de la IP en el comando de servidor.

1. Reinicio inicial opcional o restauración a valores de fábrica
```text
0000,F11
```

2. Establecer el servidor GPRS a Plaspy usando IP y marcador de APN
```text
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
- Explicación de marcadores
  - {{apn}} es el APN de datos móviles proporcionado por su operador
  - {{apnu}} es el usuario del APN si se requiere
  - {{apnp}} es la contraseña del APN si se requiere
- Si su operador no requiere credenciales de APN, omita {{apnu}} y {{apnp}} según lo permita el formato del dispositivo

3. Establecer la zona horaria a UTC 0
```text
0000,B36,0
```

4. Establecer intervalo de actualización de ubicación cada 1 minuto
```text
0000,A12,6,0
```
- Los campos numéricos siguen el formato de comando del fabricante para intervalos de reporte

5. Configurar la notificación de eventos
```text
0000,C03,0
```

Si usa la herramienta de configuración de Meitrack en lugar de SMS, ingrese los mismos valores de servidor y puerto en los campos de la herramienta y aplique los ajustes equivalentes.

## Notas de configuración

- La configuración por SMS se muestra aquí porque los ejemplos públicos de Meitrack emplean comandos SMS; el software oficial de Meitrack también puede aplicar los mismos valores de servidor y parámetros
- Las versiones de firmware y las revisiones de hardware pueden cambiar los formatos de comando y el comportamiento de los parámetros; verifique la sintaxis de los comandos para su firmware exacto antes de desplegar masivamente
- Elija UDP o TCP según la fiabilidad de su red y sus preferencias; ambos transportes son compatibles en el puerto 8888
- En los ejemplos públicos se usa la contraseña SMS por defecto 0000; cambie la contraseña del dispositivo después de la configuración inicial por seguridad operativa
- Los marcadores de APN {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse con los valores de su operador cuando sean necesarios

## Por qué usar Plaspy con esta configuración

Configurar el Meitrack T711L para reportar a Plaspy ofrece a las organizaciones una forma sencilla de centralizar la ubicación de vehículos, la notificación de eventos y el monitoreo operativo. Apuntar el T711L al servidor y puerto compartidos de Plaspy facilita poner los dispositivos en línea y visualizarlos en una única plataforma, mientras Plaspy se encarga de la detección del protocolo y el parseo de los datos del dispositivo.

Para obtener más información sobre Plaspy y cómo la plataforma se integra con dispositivos como el Meitrack T711L visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y documentación oficial, verifique los detalles de configuración en el sitio del fabricante https://www.meitrack.com/ ya que las especificaciones y el comportamiento del firmware pueden cambiar con el tiempo.

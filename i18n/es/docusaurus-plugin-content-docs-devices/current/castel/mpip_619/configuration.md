---
slug: /castel/mpip_619/configuration
id: mpip_619-configuration
sidebar_label: Configuration
title: Castel - MPIP-619 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Castel MPIP-619 y ajustes de servidor para usar con Plaspy
keywords:
  - Configuración Castel MPIP-619
  - Instalación Castel MPIP-619
  - Castel MPIP-619 Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS motocicleta
  - Configuración seguimiento vehículo
  - Configuración GPRS SMS rastreador
  - Ajustes servidor rastreador
  - Configuración plataforma GPS
  - Integración rastreador Castel
---

# Castel - Configuración MPIP-619

Esta página describe el contexto público de configuración para usar el Castel MPIP-619 con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor y del equipo que forman parte del flujo de configuración pública y explica cómo preparar el MPIP-619 para que reporte a Plaspy y permita la visibilidad y el seguimiento de la flota.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para los dispositivos soportados y detecta automáticamente el protocolo del rastreador MPIP-619. Los pasos de configuración a nivel de fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar las instrucciones siguientes junto con la documentación oficial de Castel y la interfaz SMS o de configuración del equipo.

## Visión general de la configuración

Este proceso prepara al MPIP-619 para enviar posiciones y eventos a Plaspy, de modo que los activos sean visibles y gestionables en la plataforma. El MPIP-619 admite configuración por SMS y por GPRS, y los comandos públicos suelen enviarse por SMS durante la instalación en vehículo.

- Configure el APN y los ajustes del servidor para que el rastreador pueda conectarse a Plaspy mediante datos móviles.
- Establezca el endpoint de transporte hacia el servidor de Plaspy para que los reportes usen el endpoint y puerto compartidos de la plataforma.
- Valide la conectividad y confirme que el dispositivo reporta correctamente al endpoint de Plaspy.
- Use consultas SMS o la herramienta web/firmware del equipo para verificar los parámetros GPRS y el servidor configurado.
- Asegúrese de que la alimentación del rastreador y la SIM estén operativas para que las sesiones de datos y los comandos SMS se completen.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados)  
- Transporte soportado UDP o TCP en el puerto 8888 según requiera el rastreador  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Unidad MPIP-619 alimentada e instalada o conectada a una fuente estable de 9–36 VDC.  
- Tarjeta SIM activa con datos (GPRS) y SMS habilitados y sin bloqueo PIN.  
- Conocimiento del APN del operador, y del usuario y contraseña del APN si son necesarios (se muestran marcadores de ejemplo más abajo).  
- Acceso al método de comandos SMS del equipo o a la herramienta de configuración oficial de Castel.  
- Identificador del dispositivo para derivar la clave secreta SMS si se emplea configuración por SMS.

## Cómo se conecta este rastreador a Plaspy

El MPIP-619 se configura para reportar ubicación, alertas y estado al endpoint y puerto compartidos de Plaspy para que los vehículos puedan supervisarse en la plataforma. El reporte se puede iniciar por GPRS una vez aplicados el APN y los ajustes de servidor, y los comandos SMS se usan comúnmente para establecer o verificar esos valores.

- El rastreador se apunta al dominio o IP del servidor Plaspy (d.plaspy.com o 54.85.159.138) y al puerto 8888.  
- El dispositivo usa transporte UDP o TCP para enviar datos al puerto 8888 según la configuración.  
- Tras la configuración, el dispositivo abre una sesión GPRS para enviar reportes de posición y eventos a Plaspy.  
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los reportes entrantes para visibilidad y gestión de eventos.  
- El estado y la configuración pueden comprobarse vía comandos SMS cuando el equipo lo soporte.

## Flujo de configuración común

1. Acceda al método o software de configuración oficial de Castel, o prepárese para usar los comandos SMS según documente Castel.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del equipo.  
3. Establezca el puerto 8888 como puerto de reporte del dispositivo.  
4. Seleccione UDP o TCP si el equipo requiere elegir el transporte.  
5. Configure el APN, el usuario APN y la contraseña APN según lo requiera el operador de la SIM.  
6. Aplique o guarde la configuración usando la herramienta del dispositivo o enviando el comando SMS de establecimiento.  
7. Reinicie el equipo si el fabricante lo requiere o después de guardar los ajustes.  
8. Valide que el dispositivo reporte a Plaspy comprobando datos entrantes en la plataforma y usando el comando SMS de verificación GPRS si está disponible.

## Ejemplos de comandos de configuración

El MPIP-619 admite configuración por SMS. La clave secreta SMS por defecto del equipo son los últimos 6 caracteres ASCII del ID del dispositivo. Reemplace {{SecretKey}} por ese valor al enviar comandos.

- Establecer el APN y el servidor IP y puerto de Plaspy (reemplazar marcadores según corresponda):

```text
*{{SecretKey}}#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

- Consultar la configuración GPRS actual:

```text
*{{SecretKey}}#get gprs#*
```

Notas sobre los marcadores:
- [apn] = APN del operador (por ejemplo internet o el APN específico del operador)  
- [apnu] = usuario del APN si el operador lo solicita (dejar vacío si no aplica)  
- [apnp] = contraseña del APN si el operador la solicita (dejar vacía si no aplica)

Envíe estos SMS desde un número autorizado o de acuerdo con las reglas de autorización SMS de Castel. El orden de los comandos es importante: configure GPRS primero y luego verifique con get gprs.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los SMS o los parámetros disponibles; siempre verifique con el manual del dispositivo para su revisión de firmware.  
- La configuración por SMS es común en el MPIP-619, pero podrían estar disponibles herramientas del proveedor o métodos por USB/serial según la unidad.  
- Elija TCP o UDP según la preferencia del instalador y las consideraciones de red; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Mantenga la clave secreta del dispositivo segura y confirme cómo derivarla del ID del equipo antes de enviar comandos SMS de configuración.  
- Pruebe la conectividad después de configurar confirmando que el dispositivo aparece en Plaspy y usando el comando get gprs para verificar.

## Por qué usar Plaspy con esta configuración

Usar el Castel MPIP-619 con Plaspy permite a las organizaciones obtener visibilidad de ubicación y reportes de eventos de forma consistente a través de un endpoint de servidor compartido. El soporte del MPIP-619 para configuración por SMS y GPRS facilita apuntar las unidades al servidor de Plaspy y comenzar a recibir telemetría para monitoreo de flota, alertas y análisis operativo.

Para obtener más información sobre Plaspy y cómo se integra esta configuración con la plataforma visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento de firmware y detalles del fabricante consulte la documentación de Castel en http://www.castelecom.com/ ya que el hardware y los procedimientos pueden cambiar con el tiempo.

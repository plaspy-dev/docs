---
slug: /teltonika/ftc880/configuration
id: ftc880-configuration
sidebar_label: Configuration
title: Teltonika - FTC880 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar la Teltonika FTC880 con Plaspy usando ajustes de servidor compartidos y comandos simples
keywords:
  - Configuración Teltonika FTC880
  - FTC880 configuración Plaspy
  - FTC880 configuración de servidor
  - Configuración de rastreador Teltonika
  - Rastreador GPS FTC880
  - Integración de rastreadores Plaspy
  - Configuración SMS FTC880
  - Seguimiento de flotas FTC880
  - Rastreador de vehículo FTC880
  - Configuración FOTA Teltonika
---

# Teltonika - Configuración del FTC880

Esta página ofrece orientación pública para configurar la Teltonika FTC880 con Plaspy. Se enfoca en los ajustes compartidos del servidor de Plaspy, el proceso práctico para aplicar esos valores en su FTC880 y el formato de comando de ejemplo que proporciona Teltonika para una configuración básica de parámetros. Use esta guía como referencia práctica para preparar el dispositivo y que pueda comunicarse con Plaspy; siempre verifique los detalles específicos del dispositivo con la documentación oficial de Teltonika.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación o la herramienta de configuración de Teltonika que utilice. El FTC880 admite herramientas de gestión remota de Teltonika y comandos de configuración por estilo SMS; el ejemplo a continuación muestra el formato setparam común para establecer APN y parámetros de servidor antes de que el dispositivo sea validado en Plaspy.

## Resumen de configuración

Configurar el FTC880 para Plaspy significa preparar el rastreador para que envíe posiciones y telemetría al endpoint de Plaspy, verificar la conectividad y asegurarse de que la plataforma reconozca el dispositivo. El objetivo es aplicar los valores del servidor compartido, confirmar la selección de transporte si el dispositivo lo requiere y validar los reportes en Plaspy.

- Configure el APN del dispositivo y los marcadores de autenticación para que el rastreador pueda usar datos móviles.
- Apunte el FTC880 al dominio o IP del servidor de Plaspy y al puerto compartido.
- Seleccione UDP o TCP en el dispositivo si el firmware exige una elección explícita.
- Guarde o aplique los ajustes y reinicie el dispositivo cuando sea necesario para activar el envío.
- Confirme que el rastreador aparece en Plaspy y está enviando las posiciones y eventos esperados.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Transporte soportado: UDP o TCP (el dispositivo puede configurarse para usar cualquiera de los dos)  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta

## Requisitos típicos antes de la configuración

- Un FTC880 con batería cargada y alimentado, con acceso al método de configuración del fabricante (comandos SMS, herramientas Teltonika o FOTA WEB)  
- Servicio celular operativo y una SIM activa con los ajustes APN correctos para su operador  
- Marcadores de APN preparados: [apn], [apnu], [apnp] para completar con los valores de su operador según sea necesario  
- Acceso al flujo de configuración de Teltonika o al número de teléfono de control por SMS para enviar comandos si usa configuración vía SMS  
- Conocimientos básicos sobre si su instalación requiere la selección de UDP o TCP en el dispositivo

## Cómo se conecta este rastreador a Plaspy

El FTC880 transmite posición GNSS y telemetría a través del enlace celular al endpoint de Plaspy para que las ubicaciones y eventos sean visibles en los paneles e informes de Plaspy. El rastreador se configura para apuntar al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda recibir e interpretar automáticamente el protocolo del dispositivo.

- Las actualizaciones de posición y la telemetría se envían desde el FTC880 a d.plaspy.com o 54.85.159.138 en el puerto 8888  
- El transporte puede configurarse como UDP o TCP en el dispositivo cuando el firmware requiere una elección explícita  
- La detección automática de protocolo de Plaspy identifica y analiza el protocolo del rastreador cuando llegan los datos  
- El reporte de eventos (movimiento, conectividad y estado del dispositivo) se reenvía a Plaspy para alertas y registros históricos

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Teltonika que planea usar (comandos SMS, Teltonika FOTA WEB o una herramienta de configuración de Teltonika).  
2. Prepare e ingrese los valores APN del operador móvil usando los marcadores [apn], [apnu] y [apnp] si es necesario.  
3. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 como endpoint del dispositivo.  
4. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).  
5. Si el dispositivo lo requiere, elija UDP o TCP como opción de transporte.  
6. Aplique o guarde la configuración en la herramienta de Teltonika o envíe el comando de configuración por SMS.  
7. Reinicie el FTC880 si el método de configuración lo exige y luego valide que el dispositivo está reportando a Plaspy.

## Comandos de configuración de ejemplo

El comando de ejemplo de Teltonika abajo muestra un comando de lote en línea estilo setparam que se usa comúnmente para establecer APN y parámetros de servidor. Preserve y reemplace los marcadores de APN con los valores de su operador antes de enviarlo.

- Ejemplo de comando setparam para parámetros básicos:

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando:
- [apn] es el Access Point Name del operador necesario para los datos celulares.  
- [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN; complételos solo si su operador exige autenticación.  
- 2004:d.plaspy.com establece el dominio del servidor en Plaspy. Puede sustituir 54.85.159.138 por la IP del servidor si lo prefiere.  
- 2005:8888 establece el puerto de Plaspy usado para todos los dispositivos.  
- 2006:1 es un parámetro de ejemplo incluido; su correspondencia exacta (por ejemplo para la selección de transporte) depende del dispositivo y firmware. Consulte la documentación de Teltonika o la herramienta de configuración para el significado preciso de cada parámetro.

Si usa Teltonika FOTA WEB o una utilidad de configuración de escritorio, los mismos valores (APN, d.plaspy.com o 54.85.159.138, puerto 8888 y transporte) se aplican desde la interfaz gráfica en lugar de por SMS.

## Consideraciones de configuración

- Las versiones de firmware de Teltonika y los códigos de parámetro pueden variar; confirme los números de parámetro y la sintaxis en el manual del FTC880 o en la documentación de soporte de Teltonika.  
- La configuración por SMS suele estar soportada en los dispositivos Teltonika, pero asegúrese de que el dispositivo acepte SMS desde su número de configuración y de que el control por SMS esté habilitado.  
- Elija UDP o TCP para el transporte según su red y los requisitos del firmware del dispositivo; Plaspy aceptará cualquiera en el puerto 8888.  
- Reemplace siempre [apn], [apnu] y [apnp] con las credenciales de su proveedor celular cuando sea necesario.  
- Tras aplicar los ajustes, permita un breve lapso para que el dispositivo establezca sesión y para que Plaspy detecte y analice automáticamente el protocolo del rastreador.

## Por qué usar Plaspy con esta configuración

Configurar el FTC880 para reportar a Plaspy ofrece a las organizaciones una forma directa de consolidar posiciones GNSS resistentes, optimizadas para batería, y telemetría del dispositivo en una sola plataforma de seguimiento. La durabilidad del FTC880 y sus capacidades de gestión remota, combinadas con la detección automática de protocolos de Plaspy, facilitan la visibilidad de flotas y activos en entornos mixtos.

Para saber más sobre Plaspy e integraciones de dispositivos compatibles visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, el comportamiento del firmware y las definiciones de parámetros, verifique los detalles en el sitio del fabricante https://www.teltonika-gps.com/ ya que las especificaciones y métodos de Teltonika pueden cambiar con el tiempo.

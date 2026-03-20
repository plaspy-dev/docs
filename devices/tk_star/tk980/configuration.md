---
slug: /tk_star/tk980/configuration
id: tk980-configuration
sidebar_label: Configuration
title: TK-Star - TK980 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for TK-Star TK980 showing Plaspy server settings and SMS commands to configure the tracker for platform integration
keywords:
  - TK-Star TK980 configuration
  - TK980 setup
  - TK-Star GPS tracker Plaspy
  - TK980 server configuration
  - TK980 SMS commands
  - TK980 APN settings
  - TK980 GPRS setup
  - Plaspy device configuration
  - vehicle tracker TK980
  - OBD2 tracker configuration
---

# TK-Star - TK980 Configuration

This page provides the public configuration context for using the TK-Star TK980 with Plaspy. It collects the essential Plaspy server settings and the typical manufacturer-side commands and workflows you can use to connect the TK980 to Plaspy for real time tracking and OBD2 telemetry. Use this guide together with the device manual and the manufacturer resources for a complete setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact steps on the manufacturer side can vary with firmware version, hardware revision, installation type, and vendor tools. The example SMS commands in this guide reflect common public configuration commands for the TK980 and should be adapted as needed for your device and SIM operator.

## Configuration Overview

Configuring the TK980 for Plaspy prepares the device to send location and OBD2 telemetry to the Plaspy server endpoint so the unit becomes visible and manageable in the platform. The process typically involves configuring the device APN and data upload destination, selecting the transport mode if required, and validating that the device reports to Plaspy.

- Set the device APN, username, and password to enable cellular data for GPRS reporting.
- Point the tracker to Plaspy by entering the shared server domain or IP and the correct port.
- Choose the transport mode UDP or TCP on port 8888 when the device firmware requires a transport selection.
- Apply the configuration and activate GPRS reporting so the TK980 can stream location and OBD2 telemetry to Plaspy.
- Verify the device appears and reports in Plaspy to confirm successful integration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once the device reports to the shared endpoint

## Typical Requirements Before Setup

- Access to the vehicle OBD2 port and a powered TK980 device ready for configuration.
- An active cellular SIM with data enabled and any required SMS capability for SMS based setup.
- Knowledge of the correct APN, and optionally APN username and password for the mobile operator.
- An SMS capable handset or a manufacturer configuration tool supported by TK-Star for sending commands.
- Access to the TK-Star device manual and the latest firmware release notes from the manufacturer.

## How This Tracker Connects to Plaspy

The TK980 is configured to report its location and OBD2 telemetry to the Plaspy server endpoint and port so data becomes visible and actionable within Plaspy. Once configured, the device sends periodic uploads and event reports to the shared Plaspy endpoint.

- The tracker uses GPRS to send periodic position and OBD2 telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- The device may use either UDP or TCP transport on port 8888 when selected in device settings.
- Plaspy automatically detects the tracker protocol and ingests reports so the device appears on the platform without per device port changes.
- Alarms and event messages such as movement or overspeed are forwarded to Plaspy and made available for notifications and historical route storage.
- Once the tracker reports successfully the unit is visible in Plaspy for live tracking, alerts, and analytics.

## Common Configuration Workflow

1. Access the official TK-Star configuration method for your unit, typically SMS commands or the manufacturer configuration tool as described in the TK-Star documentation.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server address configuration.
3. Set the upload port to 8888 in the device settings.
4. Choose UDP or TCP as the transport if the device requires an explicit selection.
5. Configure the operator APN and optional APN username and APN password so the device can use mobile data.
6. Apply or save the configuration and, if required, restart or reinitialize the device to activate GPRS reporting.
7. Validate that the device reports to Plaspy and appears on the platform; confirm live location and telemetry updates.

## Example Configuration Commands

The TK980 supports SMS based configuration. The following public SMS commands are commonly used to prepare the device for Plaspy. The default device password in these examples is 123456. Replace placeholders and values as needed and send each SMS from a phone to the device SIM number.

- Restore factory settings (optional initial step)
```sms
begin123456
```

- Set the operator APN
```sms
apn123456 [apn]
```
Replace [apn] with your SIM operator APN string.

- Set the APN username (optional)
```sms
apnuser123456 [apnu]
```
Replace [apnu] with the APN username if required by the operator.

- Set the APN password (optional)
```sms
apnpasswd123456 [apnp]
```
Replace [apnp] with the APN password if required by the operator.

- Set the GPRS server to Plaspy using the server IP and port
```sms
adminip123456 54.85.159.138 8888
```
This sets the device to report to Plaspy on port 8888. You may also enter d.plaspy.com where supported by the device.

- Set the upload interval to 60 seconds
```sms
upload123456 60
```
Adjust the interval value as needed for reporting frequency.

- Switch the device to GPRS mode to begin data reporting
```sms
gprs123456
```

Notes on placeholders: [apn] is the network APN, [apnu] is the APN username, and [apnp] is the APN password. Keep the device password (123456 in these examples) as required by your unit; replace it if you have a different admin password.

## Configuration Notes

- SMS based configuration is commonly supported for TK980 but manufacturer tools or firmware updates may introduce alternative configuration methods.
- Firmware variations can change the exact command syntax or required parameter order; always confirm commands against the device manual for your firmware version.
- When the device requires a transport selection, choose UDP or TCP explicitly; Plaspy accepts either on port 8888 and will auto detect protocol once reports arrive.
- Plaspy uses the same port for all supported devices which simplifies per device configuration to the shared port 8888 and the Plaspy endpoint.
- Verify APN credentials with the mobile operator before attempting GPRS setup to avoid connectivity delays.

## Why Use Plaspy with This Configuration

Using the TK980 with Plaspy provides a practical path to real time vehicle visibility and OBD2 telemetry without invasive wiring thanks to the plug and play OBD2 form factor. Configuring the device to report to Plaspy enables live maps, event notifications, route history, and fleet level oversight that are useful for fleet operators, rental services, and vehicle security deployments.

To learn more about how Plaspy supports trackers like the TK980 visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and manufacturer commands verify the official TK-Star documentation at https://www.tk-star.com/ as setup methods and device behavior can change over time.

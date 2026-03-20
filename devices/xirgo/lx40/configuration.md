---
slug: /xirgo/lx40/configuration
id: lx40-configuration
sidebar_label: Configuration
title: Xirgo - LX40 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo LX40 showing how to point the tracker to Plaspy using shared server settings and SMS commands
keywords:
  - Xirgo LX40 configuration
  - Xirgo LX40 setup
  - Xirgo LX40 server configuration
  - Xirgo LX40 Plaspy setup
  - LX40 GPS tracker configuration
  - LX40 tracking software configuration
  - LX40 vehicle tracking setup
  - Plaspy tracker configuration
  - Plaspy server settings
  - LX40 SMS configuration
---

# Xirgo - LX40 Configuration

This page covers the public configuration context for using the Xirgo LX40 tracker with Plaspy. It provides the practical server settings and example commands that are commonly used to point the LX40 to Plaspy so the device can report location and telemetry to the platform. Where available, sample SMS commands from public device configuration content are shown and explained.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on its ingest endpoint, but exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The LX40 supports SMS based configuration as shown below, and integrators should confirm specific parameter meanings with Xirgo documentation before wide deployment.

## Configuration Overview

The goal of this configuration is to prepare the LX40 so it can communicate reliably with Plaspy, validate the connectivity, and appear as an active device in the Plaspy platform. The process typically involves configuring the device APN, setting the GPRS server to Plaspy, selecting the transport protocol if required, and verifying data reporting.

- Configure mobile network parameters such as APN so the device can obtain data connectivity.
- Point the LX40 to the Plaspy server endpoint and shared port so telemetry is routed to the platform.
- Choose UDP or TCP transport on the device if the unit requires an explicit transport selection.
- Validate connectivity and ensure the device is visible in Plaspy after applying settings.
- Use SMS or the manufacturer configuration tool as supported to perform the configuration steps.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so devices sending to the same server and port are recognized

Plaspy uses the same port for all supported devices and will auto detect the protocol in use for incoming device connections.

## Typical Requirements Before Setup

- Device powered and accessible for configuration either by SMS or the official Xirgo configuration tool depending on installer preference.
- Active SIM card with data enabled and the correct APN credentials for the mobile operator.
- SMS capability on the SIM or a configuration interface that supports sending the necessary commands to the LX40.
- Access to the device IMEI or identifier so you can confirm the correct unit is reporting to Plaspy.
- A Plaspy account or contact in your Plaspy provisioning workflow to confirm device visibility after configuration.
- Manufacturer documentation or release notes for the LX40 to verify firmware specific behavior and command syntax.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the LX40 sends its telemetry and status data to the shared Plaspy server endpoint and port so the platform can ingest, normalize, and present it in dashboards and reports. Plaspy’s server and automatic protocol detection enable mixed fleets and device variants to report using the same endpoint.

- The tracker is configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- The device transmits location and device events over GPRS to the specified Plaspy endpoint.
- Plaspy automatically detects the tracker protocol when the device establishes a session on the shared port.
- Successful configuration makes the LX40 visible in Plaspy where events, geofences, and telemetry can be monitored.
- Integrators can use Plaspy to manage device lifecycle and receive OTA updates when supported and provisioned.

## Common Configuration Workflow

1. Access the official Xirgo configuration method or software, or prepare to send SMS commands if that method is supported for your LX40 unit.
2. Enter the Plaspy server address into the device configuration either as the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the device port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP transport on the device if it requires an explicit transport selection.
5. Apply or save the configuration on the device and send any required SMS commands from an authorized phone number if using SMS setup.
6. Restart the device if the configuration method or device documentation indicates a reboot is required.
7. Validate that the device reports to Plaspy by checking device status in your Plaspy instance or confirming data arrival via your Plaspy contact.

If SMS commands are used for configuration, perform them in the order required by Xirgo documentation and then validate reporting to Plaspy.

## Example Configuration Commands

The following SMS style commands are provided as public example configuration content for the LX40. Send these commands by SMS to the device phone number used for configuration. Preserve the order as shown.

- Set the operator APN
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explanation
- {{apn}} is the mobile operator APN string required for data connections.
- {{apnu}} is the APN username where required by the operator.
- {{apnp}} is the APN password where required by the operator.
Replace the placeholders with your operator credentials exactly as required.

- Set the GPRS server to Plaspy
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Explanation
- This command sets the GPRS server parameters to point the LX40 to Plaspy using port 8888 and the public server IP 54.85.159.138.
- The trailing numeric parameters are manufacturer specific. Verify their exact meaning in Xirgo documentation for your firmware level before applying.

If you prefer domain addressing and the device supports it, you can configure the server to d.plaspy.com instead of the numeric IP via the equivalent manufacturer command or configuration tool. Always confirm the syntax and parameter order with Xirgo documentation for your device firmware.

## Configuration Notes

- The LX40 supports SMS based configuration as shown, but many integrators use the official Xirgo configuration tools for bulk provisioning and scripting.
- Firmware revisions and hardware variants can change command syntax or parameter ordering. Refer to the LX40 documentation for firmware specific details.
- Choose UDP or TCP transport according to your network and installation needs. Plaspy accepts either on port 8888 and will auto detect the protocol.
- When using SMS commands, send from a number authorized for device configuration and verify receipt by checking device response messages if the device returns confirmations.
- Always test configuration on a single device and confirm visibility in Plaspy before deploying changes fleet wide.

## Why Use Plaspy with This Configuration

Configuring the Xirgo LX40 to report to Plaspy gives fleets a consistent and centralized way to collect location, driver events, and vehicle telemetry. Plaspy’s shared server endpoint model and automatic protocol detection simplify integration across different devices and firmware variants, reducing per device configuration complexity.

To learn more about Plaspy and how it supports trackers like the LX40 visit https://www.plaspy.com. For the latest device specific commands, firmware behavior, and configuration details verify current information on the manufacturer site https://xirgo.com/ since setup methods and parameters can change with firmware and hardware revisions.

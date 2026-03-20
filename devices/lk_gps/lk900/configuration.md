---
slug: /lk_gps/lk900/configuration
id: lk900-configuration
sidebar_label: Configuration
title: LK-GPS - LK900 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK-GPS LK900 showing Plaspy server settings and practical steps to connect this GPS tracker
keywords:
  - LK-GPS LK900 configuration
  - LK900 setup
  - LK900 Plaspy configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking setup
  - GPS platform setup
  - LK900 integration guide
  - LK-GPS server settings
  - fleet tracking LK900
---

# LK-GPS - LK900 Configuration

This page covers the public configuration context for using the LK-GPS LK900 with the Plaspy platform. It focuses on the shared server settings and the practical steps you will commonly follow to point the LK900 toward Plaspy so the device can report its location and status to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this document as a practical guide for the common settings you will apply and consult the LK-GPS manufacturer documentation for device-specific commands or firmware notes.

## Configuration Overview

The goal of configuration is to prepare the LK900 to communicate reliably with Plaspy so the device appears in the platform and reports position and event data. This typically means entering the Plaspy endpoint and port, confirming connectivity, and validating that the tracker is transmitting.

- Configure the device to report to the Plaspy server endpoint so location updates are routed to your Plaspy account.
- Ensure the LK900 has a working power source, network access, and correct APN or SIM settings as required for GSM connectivity.
- Choose the transport method supported by the device (UDP or TCP) and set the common Plaspy port.
- Save and apply the settings, then validate the device is visible in Plaspy and sending regular updates.
- Troubleshoot common issues such as APN, signal, and firmware differences that can block reporting.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the LK900. Plaspy uses the same port for all supported devices and will automatically detect the device protocol once the tracker connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Confirm the LK900 is powered and has sufficient battery or a connected power source for setup and testing.
- Active SIM card with data or the connectivity method required by the device, and correct APN settings if using a GSM data connection.
- Access to the official LK-GPS configuration method or software as provided by the manufacturer or vendor.
- A clear view to acquire GPS signal during initial testing and a stable mobile network for GSM reporting.
- Knowledge of whether your device requires SMS, serial tool, or a configuration app to apply server and transport settings.
- Access to the Plaspy account where the device will appear so you can validate reporting after configuration.

## How This Tracker Connects to Plaspy

When configured, the LK900 sends location and event data to the Plaspy endpoint so the device can be monitored and managed within the platform. The tracker is pointed at the shared Plaspy server and port and uses the selected transport to deliver its telemetry.

- The tracker reports position updates and standard device events to d.plaspy.com on port 8888.
- You can configure the device to use UDP or TCP depending on what the firmware or configuration tool supports.
- Plaspy receives the connection and detects the tracker protocol automatically to parse incoming messages.
- Events such as movement, low battery, geo-fence alerts, and overspeed can be forwarded to Plaspy for display and alerts.
- Successful configuration results in the device appearing in your Plaspy account and sending regular status updates.

## Common Configuration Workflow

1. Access the official LK-GPS configuration method or software provided by the manufacturer, vendor, or installer.
2. In the device server settings enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
3. Set the device port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection in its configuration interface.
5. Configure APN or SIM related parameters if the tracker uses GSM data, then apply or save the configuration.
6. Restart or power-cycle the LK900 if required by the manufacturer to apply the new server settings.
7. Validate that the device reports to Plaspy by checking your Plaspy account for the device and recent location updates.

## Example Configuration Commands

The exact command set and syntax to program the LK900 vary by firmware and the manufacturer configuration tool used. Many LK-GPS devices support configuration via manufacturer software, an SMS command set, or a USB/serial tool. Because model-specific commands are provided by the manufacturer, please consult the LK-GPS documentation or vendor guide for the precise commands and examples for your firmware revision.

If your device supports SMS configuration, common public steps are typically:
- Send an SMS or use the configuration tool to set the server domain or IP.
- Set the server port to 8888.
- Select the transport UDP or TCP if required.
- Save settings and reboot the device.

Refer to LK-GPS official documentation for the precise SMS syntax or PC tool commands for the LK900.

## Configuration Notes

- Firmware variations can change command syntax, available settings, and which transport modes are supported; verify your device firmware version before applying instructions.
- Choose UDP when low overhead is preferred and the network is stable; choose TCP if a persistent, connection-oriented session is required by your deployment or supported by the firmware.
- Plaspy automatically detects the tracker protocol once the device connects to d.plaspy.com on port 8888, so focus on correct server, port, and connectivity details.
- Ensure APN parameters are correct for the SIM in use; placeholders like [apn], [apnu], or [apnp] are commonly used in manufacturer documentation to indicate your carrier values.
- If using SMS commands for configuration, test with a single device first and confirm behavior before deploying at scale.

## Why Use Plaspy with This Configuration

Using the LK900 with Plaspy provides a straightforward path to asset visibility and operational monitoring. Pointing the device to the shared Plaspy server and port lets Plaspy parse location and event data automatically, so fleets and asset managers can monitor movement, receive alerts, and review history in one place.

To learn more about Plaspy and supported features, visit https://www.plaspy.com. Please verify the latest LK900 device specific setup details, commands, and firmware behavior on the manufacturer site https://www.lk-gps.com because manufacturer specifications and configuration methods can change over time.

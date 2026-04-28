---
slug: /aovx/am300/configuration
id: am300-configuration
sidebar_label: Configuration
title: AOVX - AM300 Configuration
sidebar_class_name: menu_item_tracker
description: AOVX AM300 configuration guide for Plaspy server setup, tracker commands and practical integration steps.
keywords:
  - AOVX AM300 configuration
  - AOVX AM300 setup for Plaspy
  - AOVX AM300 server configuration
  - AOVX AM300 GPS platform setup
  - AOVX AM300 tracking software configuration
  - AOVX AM300 tracker setup
  - AM300 Plaspy configuration
  - AM300 GPS tracker setup
  - AOVX tracker configuration
  - Plaspy GPS tracker setup
---

# AOVX - AM300 Configuration

This page covers the public configuration context for using the AOVX AM300 with Plaspy. It brings together the shared Plaspy server values and the publicly available tracker commands needed to point the device to Plaspy and confirm its current settings.

Plaspy uses the same server port for all supported devices and automatically detects the tracker protocol. That simplifies integration on the platform side, while the exact manufacturer-side setup process can still vary depending on firmware, hardware revision, installation type, and the tool used to apply configuration.

## Configuration Overview

The AOVX AM300 is configured to send tracking data to the Plaspy server endpoint using the public server details listed below. In practice, the goal is to make sure the device is pointed at the shared Plaspy service, connected with the expected transport, and ready to report location and status information into the platform.

- Prepare the tracker so it can communicate with Plaspy using the shared server endpoint and port.
- Set the reporting destination to the Plaspy server domain or its IP address.
- Use the correct transport option if the manufacturer configuration method asks for UDP or TCP.
- Confirm the device is actively reporting after saving the settings.
- Check the tracker parameters and status to validate that the configuration was applied correctly.
- Keep the setup aligned with the device firmware and the manufacturer’s public configuration workflow.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the AM300:

- Server domain `d.plaspy.com`
- Server IP `54.85.159.138`
- Port `8888`
- Transport support for `UDP` or `TCP`
- Automatic protocol detection in Plaspy

These values are the standard connection target for supported devices on Plaspy. The platform uses the same port across devices, and protocol selection is handled automatically once the tracker starts sending data.

## Typical Requirements Before Setup

Before configuring the AM300, make sure the tracker is ready for initial setup and that you have access to the official manufacturer method for applying commands or saving network parameters.

- The device should have power available and be in a ready state for configuration.
- You should have access to the official AOVX configuration method or tool described by the manufacturer.
- The APN information for the mobile network should be available when required by the setup flow.
- You should confirm that the chosen configuration method can send the tracker commands shown below.
- The tracker should be able to store and apply the settings after they are sent.
- The installation should allow the device to reconnect and begin reporting after the configuration is saved.

## How This Tracker Connects to Plaspy

The AM300 connects to Plaspy by sending its tracking data to the shared Plaspy server endpoint on port 8888. Once the device is configured correctly, Plaspy receives the incoming data stream and automatically identifies the protocol being used by the tracker.

- The tracker is pointed to `d.plaspy.com` or `54.85.159.138` as its reporting destination.
- Port `8888` is used for the device connection.
- The device may communicate using `UDP` or `TCP` if the setup flow requires transport selection.
- Plaspy automatically detects the tracker protocol once data reaches the platform.
- After connection, the device can appear in Plaspy for monitoring, reporting, and operational visibility.
- Status and configuration checks help confirm that the tracker is communicating as expected.

## Common Configuration Workflow

1. Open the official AOVX configuration method or software used to manage the AM300.
2. Enter the carrier APN if the setup requires network access parameters.
3. Configure the reporting server as `d.plaspy.com` or `54.85.159.138`.
4. Set the port to `8888`.
5. Select `UDP` or `TCP` if the device or configuration tool asks for a transport choice.
6. Apply or save the configuration in the manufacturer tool.
7. Restart the device if the model or tool requires a reboot for the new settings to take effect.
8. Validate that the device reports to Plaspy and review the live status or parameter response.

## Example Configuration Commands

The AM300 public configuration flow includes SMS-style commands for setting the carrier APN, pointing the tracker to Plaspy, defining the update interval, and enabling GPRS mode. Placeholders such as `{{apn}}`, `{{apnu}}`, and `{{apnp}}` represent the APN name, APN username, and APN password when those credentials are required by the carrier.

- Configure the APN

```text
APN,{{apn}}# 
```

If your carrier requires credentials, the command supports the optional username and password placeholders:

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Set the reporting interval

```text
TIMER,60,60#
```

- Enable GPRS mode

```text
GPRSON,1#
```

- Check the current configuration

```text
PARAM#
```

- Check tracker status

```text
STATUS#
```

## Configuration Notes

- The public commands shown above are useful for basic tracker preparation, but the exact behavior can vary by firmware version.
- Some installations may use SMS-based setup, while others rely on the manufacturer’s software or another public configuration method.
- If the device asks for a transport selection, use the option that matches your deployment plan, either `UDP` or `TCP`.
- Plaspy accepts the tracker on the shared port and automatically detects the protocol, so the main task is to point the device to the correct server and port.
- Manufacturer documentation should always be checked for the latest command syntax and device-specific behavior.

## Why Use Plaspy with This Configuration

When the AM300 is configured to send data to Plaspy, it can support practical visibility for long-term asset monitoring, security workflows, and operational oversight. The shared server setup makes deployment simpler across supported devices, while automatic protocol detection helps reduce platform-side complexity during integration.

For teams managing assets that need reliable reporting and straightforward server setup, Plaspy provides a centralized place to receive tracker data, review status, and monitor activity over time. To learn more about Plaspy, visit https://www.plaspy.com. For the latest device-specific setup details, firmware behavior, and manufacturer guidance, please verify the current information on the official AOVX website at https://www.aovx.com/.

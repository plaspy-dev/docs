---
slug: /aovx/gl100/configuration
id: gl100-configuration
sidebar_label: Configuration
title: AOVX - GL100 Configuration
sidebar_class_name: menu_item_tracker
description: AOVX GL100 setup guide for Plaspy with server settings, configuration workflow, and public SMS commands
keywords:
  - AOVX GL100 configuration
  - AOVX GL100 setup for Plaspy
  - AOVX GL100 server configuration
  - AOVX GL100 GPS tracker setup
  - AOVX GL100 tracking software configuration
  - GL100 Plaspy configuration
  - GL100 GPS platform setup
  - AOVX tracker setup
  - GPS tracker configuration for Plaspy
  - GL100 asset tracker setup
---

# AOVX - GL100 Configuration

This page covers the public configuration context for using the AOVX GL100 with Plaspy. It focuses on the shared Plaspy server settings, the general setup flow, and the public commands that are available for initial tracker configuration.

Plaspy uses common server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side steps can still vary depending on firmware, hardware revision, installation type, and the configuration tools provided by AOVX, so it is important to verify the current device instructions alongside the public Plaspy settings.

## Configuration Overview

The AOVX GL100 is typically prepared by pointing the tracker to the Plaspy server endpoint, confirming the communication port, and saving the configuration so the device can begin sending data. For this model, the public setup flow also includes APN configuration, a GPRS server command, interval control, and switching the device into GPRS mode.

- Configure the tracker so it can reach the Plaspy server on the shared endpoint.
- Use the same port value that Plaspy assigns to all supported devices.
- Confirm that the tracker is set to communicate with Plaspy using the supported transport option.
- Apply the reporting interval that matches the expected tracking workflow.
- Save the settings and verify that the tracker reports successfully to the platform.
- Check the device status and configuration output after setup when supported by the manufacturer tools.

## Plaspy Server Settings

- Server domain is d.plaspy.com
- Server IP is 54.85.159.138
- The port is 8888
- The device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All supported devices in Plaspy use the same port, which simplifies deployment across mixed fleets

## Typical Requirements Before Setup

- The tracker should be powered and ready for configuration.
- You should have access to the official AOVX configuration method or software for the device.
- Confirm that the device can be set to communicate with an external tracking server.
- Make sure the correct APN details are available from the carrier before entering network settings.
- Review the current manufacturer documentation for any firmware-specific setup differences.
- Plan the desired reporting interval before applying the final configuration.

## How This Tracker Connects to Plaspy

Once configured, the GL100 sends its tracking data to the shared Plaspy server endpoint and port. Plaspy then identifies the incoming protocol automatically, which helps reduce setup complexity when onboarding the device.

- The tracker is pointed to d.plaspy.com or the IP address 54.85.159.138.
- Communication is sent through port 8888, which is the same port used by supported Plaspy devices.
- UDP or TCP may be selected if the device requires a transport choice.
- Plaspy automatically detects the tracker protocol after the device starts reporting.
- Location and status updates become available in Plaspy once the connection is active and the device is sending data.
- Ongoing reporting supports monitoring, alerts, and historical tracking in the platform.

## Common Configuration Workflow

1. Open the official AOVX configuration method or software for the GL100.
2. Enter the carrier APN details if the device requires cellular network setup.
3. Set the GPRS server to d.plaspy.com or use the server IP 54.85.159.138.
4. Configure port 8888 for the Plaspy connection.
5. Choose UDP or TCP if the tracker firmware requires transport selection.
6. Save or apply the configuration changes in the manufacturer tool or via the supported SMS command flow.
7. Restart the device if the manufacturer process requires a reboot for the settings to take effect.
8. Validate that the tracker reports correctly to Plaspy and confirm status using the available check commands.

## Example Configuration Commands

The GL100 public configuration flow uses SMS commands. Placeholders such as `{{apn}}`, `{{apnu}}`, and `{{apnp}}` represent the carrier APN name, APN username, and APN password respectively when those credentials are required.

- Configure the carrier APN

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Set the update interval

```text
TIMER,60,60#
```

- Switch the tracker to GPRS mode

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

- The public commands shown here are useful for initial setup, but exact behavior can still depend on firmware version and regional variants.
- If the device requires a transport choice, use either UDP or TCP on port 8888 according to the manufacturer workflow.
- Plaspy uses the same port for supported devices, which helps keep fleet configuration consistent.
- Protocol handling is automatic in Plaspy, so the main task is to point the GL100 to the correct server and port.
- Manufacturer software, SMS setup, and device menus can differ by release, so current AOVX documentation remains the best reference for device-specific details.
- After changing settings, verify the device output with the available status or parameter commands when supported.

## Why Use Plaspy with This Configuration

Using the AOVX GL100 with Plaspy provides a practical way to centralize tracker visibility, operational monitoring, and alerting in one platform. Once the device is directed to the Plaspy server and reporting correctly, teams can use the incoming data for tracking workflows and ongoing fleet oversight.

Plaspy’s shared server model and automatic protocol detection simplify deployment, especially when tracking multiple compatible devices. If you want to learn more about Plaspy and its tracking platform capabilities, visit https://www.plaspy.com. For the most current device-specific setup details, firmware behavior, and manufacturer guidance, please verify the information on https://www.aovx.com/.

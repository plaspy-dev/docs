---
slug: /fortuna_impex/disha_9310/configuration
id: disha_9310-configuration
sidebar_label: Configuration
title: Fortuna Impex - Disha 9310 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Fortuna Impex Disha 9310 with Plaspy server settings and practical setup steps
keywords:
  - Fortuna Impex Disha 9310 configuration
  - Fortuna Impex Disha 9310 setup
  - Disha 9310 Plaspy configuration
  - Disha 9310 GPS tracker configuration
  - Disha 9310 server setup
  - Fortuna Disha 9310 tracking setup
  - Disha 9310 platform setup
  - Disha 9310 vehicle tracking configuration
  - Fortuna Impex GPS tracker configuration
  - Disha 9310 installation guide
---

# Fortuna Impex - Disha 9310 Configuration

This page documents the public configuration context for using the Fortuna Impex Disha 9310 tracker with Plaspy. It summarizes the practical server settings and workflow steps needed to point the device to Plaspy so the tracker can report location, events, and alerts to the platform. The information here uses public Plaspy configuration details and the general device description for Disha 9310.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer steps can vary by firmware version, hardware revision, installation type, and vendor tools. Follow the guidance below for preparing the device to communicate with Plaspy and consult Fortuna Impex documentation for device specific commands and vendor utilities.

## Configuration Overview

Preparing the Disha 9310 for Plaspy involves setting the device to report to the Plaspy server endpoint and verifying connectivity so the tracker appears in the Plaspy platform. The goal is to ensure the tracker can send position updates, alerts, and events reliably using the standard Plaspy server settings.

- Set the device server address to the Plaspy endpoint so reports reach the platform.
- Configure the communication transport to UDP or TCP on the Plaspy port that Plaspy uses for all devices.
- Validate mobile data connectivity and any APN settings required by the installed SIM.
- Apply and save settings using the Fortuna Impex configuration method and reboot the tracker if requested.
- Confirm the device is visible and reporting in Plaspy after configuration.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the Disha 9310:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and automatically detects the tracker protocol once the device connects to the configured endpoint.

## Typical Requirements Before Setup

- Confirm the Disha 9310 is powered and installed per the manufacturer instructions with adequate GPS antenna visibility.
- Ensure a valid SIM card with mobile data and any required APN information is active in the device.
- Have access to the official Fortuna Impex configuration method or software for the Disha 9310.
- Gather device identifiers such as IMEI or device ID needed for Plaspy onboarding or verification.
- Prepare to apply settings and restart the tracker if the configuration process or firmware requires a reboot.
- Verify access to Plaspy support documentation or your Plaspy account owner to confirm device visibility after setup.

## How This Tracker Connects to Plaspy

The Disha 9310 is configured to send periodic position updates and event messages to the shared Plaspy server endpoint. Once the device is pointed at the Plaspy server and the transport and port are set correctly, Plaspy will automatically detect and interpret the tracker protocol.

- Device reports are directed to d.plaspy.com or 54.85.159.138 on port 8888.
- The tracker can be configured to use either UDP or TCP transport depending on firmware or installer preference.
- Plaspy automatically detects the tracker protocol when data arrives, so no manual protocol selection in the platform is required.
- Regular position, alert, and event messages become visible in Plaspy once communication is established.
- Monitoring and historical tracking are available in Plaspy after the device successfully registers and sends its first messages.

## Common Configuration Workflow

1. Access the official Fortuna Impex configuration method or software for the Disha 9310 as provided by the vendor.
2. In the device server settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 as Plaspy uses the same port for all supported devices.
4. If the device requires a transport selection, choose UDP or TCP according to your network or installer preference.
5. Apply or save the configuration in the device tool and follow any prompts to confirm changes.
6. Restart the device if the manufacturer instructions require a reboot to activate new settings.
7. Validate that the device reports to Plaspy by checking device status in the platform or confirming incoming messages with your Plaspy account owner.

## Example Configuration Commands

The Disha 9310 manufacturer tools and firmware can differ, so exact command syntax may vary. Because manufacturer configuration commands are not provided here, use the official Fortuna Impex configuration utility or SMS command list from the vendor for precise commands. The important public actions are to set the server to d.plaspy.com or 54.85.159.138, set the port to 8888, and choose UDP or TCP if required.

If you have a command list from Fortuna Impex follow the same logical order when sending commands:

- set server to d.plaspy.com or 54.85.159.138
- set port to 8888
- set transport to UDP or TCP
- save and reboot the device if required

Preserve any placeholders provided by manufacturer instructions such as APN values when entering mobile data settings. Consult Fortuna Impex documentation for the exact command syntax or SMS patterns.

## Configuration Notes

- Firmware and configuration interfaces can vary between production batches and firmware revisions; confirm exact commands in manufacturer documentation.
- Choosing UDP or TCP can affect delivery semantics and firewall requirements. Test both if behavior differs in your network.
- Plaspy uses port 8888 for all supported devices so confirm that outgoing connections from the device network are allowed to that port.
- The Disha 9310 includes enclosed GPS and GPRS antennas which simplifies installation but follow mounting guidance to ensure GPS visibility.
- Keep a record of the device IMEI or identifier and any admin passwords used during configuration for future management and troubleshooting.

## Why Use Plaspy with This Configuration

Using the Fortuna Impex Disha 9310 with Plaspy gives organizations a straightforward path to real time and historical visibility, event alerts, and centralized monitoring without managing multiple server endpoints. Pointing the device to Plaspy with the public settings shown above enables the tracker to transmit position and event data into a single platform where fleet operators can monitor asset movements and receive notifications.

To learn more about Plaspy visit https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and manufacturer details with Fortuna Impex at http://fortunaindia.com/ because vendor instructions and firmware behavior can change over time.

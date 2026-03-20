---
slug: /wp/ot_10/configuration
id: ot_10-configuration
sidebar_label: Configuration
title: WP - OT-10 Configuration
sidebar_class_name: menu_item_tracker
description: Setup and server configuration guide for the WP OT-10 tracker compatible with Plaspy with practical steps and required settings
keywords:
  - WP OT-10 configuration
  - WP OT-10 setup
  - WP OT-10 Plaspy
  - WP OT-10 server configuration
  - WP OT-10 GPS setup
  - Wonde Proud OT-10
  - OT-10 tracker setup
  - OT-10 GPRS configuration
  - vehicle tracking OT-10
  - Plaspy GPS tracker setup
---

# WP - OT-10 Configuration

This page covers the public configuration context for using the WP OT-10 tracker with Plaspy. It presents the practical server settings and workflow needed to point an OT-10 to Plaspy so the device can report location and event data. The guidance below focuses on the shared Plaspy endpoint and the typical steps integrators use to enable visibility in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary depending on OT-10 firmware, hardware revision, installation type, and the vendor configuration tools you use. Always combine the settings below with the OT-10 manufacturer documentation and the tools provided by Wonde Proud for device-specific commands and firmware-dependent behavior.

## Configuration Overview

The goal of this configuration process is to prepare the OT-10 to communicate reliably with Plaspy and to validate that the device appears in the Plaspy platform. Configuration centers on pointing the device at Plaspy's shared server endpoint and ensuring the device uses GPRS over the selected transport so location and event data flow to the platform.

- Configure the device to report to the Plaspy server endpoint and confirm transport settings.
- Verify mobile connectivity and carrier APN so the OT-10 can send GPRS data.
- Apply the settings in the manufacturer configuration tool or via the OT-10 configuration port.
- Restart or reboot the device if required to activate new server settings.
- Confirm the OT-10 is visible and reporting in Plaspy after the configuration is applied.

## Plaspy Server Settings

When configuring the OT-10 for use with Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and assigns handling accordingly

Note that Plaspy uses the same port for all supported devices and relies on automatic protocol detection to interpret incoming device messages.

## Typical Requirements Before Setup

- A WP OT-10 unit with access to the manufacturer configuration interface (for example the mini USB configuration port or official configuration software supplied by Wonde Proud).
- A active SIM card with a data plan and carrier APN information for GPRS connectivity.
- Power supply or vehicle power within the OT-10 rated range 8 to 16 VDC to perform configuration and testing.
- Knowledge of the OT-10 firmware version and any device-specific instructions from Wonde Proud.
- Access to the OT-10 configuration tool, USB cable, or vendor-provided setup app as required by the device.
- Administrative access to your Plaspy account so you can verify the device appears and reports correctly after configuration.

## How This Tracker Connects to Plaspy

The OT-10 sends position and event data to Plaspy using the device communication methods it supports, configured to use Plaspy's shared server endpoint and port. Once the device is pointed to Plaspy, the platform will automatically detect the tracker protocol and parse incoming messages for display and alerting.

- The tracker transmits GPRS data over UDP or TCP to the Plaspy server endpoint.
- The device may also support CS Data or SMS for alternative reporting methods where GPRS is not available.
- OT-10 event reports such as geo-fence, speeding, towing, and power alerts are sent to Plaspy for logging and alerts.
- Plaspy receives the data at d.plaspy.com or 54.85.159.138 on port 8888 and applies automatic protocol detection to interpret messages.
- After successful configuration the device becomes visible in Plaspy and begins regular reporting to the shared port used by all devices.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software provided by Wonde Proud for the OT-10.
2. In the device server settings, enter the Plaspy server address as d.plaspy.com or 54.85.159.138.
3. Set the device reporting port to 8888 to match the Plaspy shared port.
4. Choose UDP or TCP as the transport if the OT-10 requires a transport selection during setup.
5. Apply or save the configuration settings in the OT-10 tool.
6. Restart the device if the manufacturer instructions require a reboot to apply the new settings.
7. Validate that the device reports to Plaspy by checking device visibility and incoming messages in your Plaspy account.

These steps reflect the standard sequence for pointing an OT-10 to Plaspy. Specific menu labels and command formats depend on the OT-10 firmware and the configuration tool you use.

## Example Configuration Commands

The OT-10 supports multiple configuration methods and Wonde Proud provides vendor tools and command formats that may vary by firmware. Because manufacturer commands and SMS or USB configuration formats are not uniform across firmware revisions, the exact commands may differ and should be taken from the OT-10 official documentation or the configuration utility included with the device.

Plaspy requires that when you set the server address you use d.plaspy.com or 54.85.159.138 and that the reporting port be 8888. Plaspy automatically detects the device protocol and all devices use the same Plaspy port.

If you have specific command strings provided by Wonde Proud for your OT-10 firmware (for example SMS setup commands or USB configuration files), follow the manufacturer examples and substitute the server address and port above. Preserve any placeholders your vendor documentation uses, such as APN entries or username and password fields, when applying settings.

## Configuration Notes

- The OT-10 supports GPRS over UDP and TCP as public communication options; choose the transport that works best for your carrier and network conditions.
- Over the air configuration and firmware upgrade capability may be available depending on OT-10 firmware; use official vendor tools to perform OTA updates.
- Behavior can vary across firmware versions and hardware revisions; always confirm command syntax and menu paths with Wonde Proud documentation.
- When configuring by SMS or CS Data, double check that the SIM card has data enabled and the correct APN is configured.
- Because Plaspy uses a single shared port and automatic protocol detection, you only need to set the server address and port correctly; the platform will detect and parse the device protocol.

## Why Use Plaspy with This Configuration

Using the WP OT-10 with Plaspy gives fleet managers and integrators a practical pathway to receive accurate GPS and event data through a standardized server endpoint. The OT-10's support for GPRS UDP/TCP, CS Data, and SMS combined with Plaspy's automatic protocol detection helps reduce configuration complexity and speeds deployment across vehicle installations.

Learn more about Plaspy features and platform capabilities at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details may change over time so verify the latest OT-10 setup instructions and command syntax with Wonde Proud at http://www.wondeproud.com/ before completing your deployment.

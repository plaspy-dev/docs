---
slug: /genx_mobile/gnx_6/configuration
id: gnx_6-configuration
sidebar_label: Configuration
title: GenX Mobile - GNX-6 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect the GenX Mobile GNX 6 tracker to Plaspy with practical server settings and setup workflow
keywords:
  - GenX Mobile GNX 6 configuration
  - GNX 6 setup Plaspy
  - GNX 6 server configuration
  - GenX Mobile GPS tracker configuration
  - GNX 6 tracking software configuration
  - GNX 6 GPS platform setup
  - Plaspy tracker setup
  - vehicle tracking GNX 6
  - GNX 6 integration guide
  - tracker to Plaspy configuration
---

# GenX Mobile - GNX-6 Configuration

This page provides the public configuration context for using the GenX Mobile GNX-6 tracker with Plaspy. It focuses on the practical server settings and high level steps you will apply on the manufacturer side so the device can communicate with Plaspy. Use this guidance together with GenX Mobile documentation and your installer tools.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so confirm the exact configuration method for the GNX-6 with GenX Mobile before deployment.

## Configuration Overview

This section summarizes the purpose of configuring the GNX-6 for Plaspy and what you should achieve before verifying device visibility in the platform.

- Prepare the GNX-6 so it reports to the Plaspy server endpoint and port used by all supported devices.
- Ensure cellular connectivity and basic device health so location and event data can be transmitted reliably.
- Select the transport type required by your GNX-6 firmware and enter the Plaspy server address.
- Validate the device shows up in Plaspy and confirm the platform is receiving periodic location and event updates.
- Verify accelerometer and event reporting behavior if your deployment requires driver behavior or harsh event monitoring.

## Plaspy Server Settings

Use the following public server settings when configuring the GNX-6 to report to Plaspy. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on connection.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Confirm the GNX-6 has stable power and is powered on for configuration and testing.
- Active cellular connectivity and a data enabled SIM configured for the device if using cellular reporting.
- Access to the official GenX Mobile configuration method or software used for the GNX-6.
- Know the device firmware revision so you can follow the correct configuration flow for that release.
- A Plaspy account and the ability to view incoming device connections for validation.
- A safe test environment to verify reporting before live deployment.

## How This Tracker Connects to Plaspy

The GNX-6 is configured to send location and event data to Plaspy by pointing the device at the shared Plaspy server endpoint and using the platform port. Once configured, Plaspy will recognize the tracker protocol automatically and begin ingesting location and event messages.

- The device reports telemetry to the Plaspy server endpoint d.plaspy.com or its IP 54.85.159.138.
- All traffic is sent to port 8888 regardless of device model.
- You can select UDP or TCP on the device if the firmware requires a transport choice.
- Plaspy performs automatic protocol detection to interpret the incoming messages from the GNX-6.
- Events such as accelerometer triggers are sent as part of the tracker data stream and become visible in Plaspy once the device is reporting.

## Common Configuration Workflow

Follow these public, practical steps to configure a GNX-6 for Plaspy. Exact menu names and UI flows depend on GenX Mobile tools and firmware.

1. Access the official GenX Mobile configuration method or software for the GNX-6 as provided by the vendor.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP 54.85.159.138 in the server field.
3. Set the server port to 8888, matching the port Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Apply or save the configuration in the device menu or tool.
6. Restart the GNX-6 if the configuration process or firmware requires a reboot to apply settings.
7. Validate the device reports to Plaspy by checking for the device in the Plaspy platform and confirming incoming location updates.

## Example Configuration Commands

The GNX-6 configuration method varies by GenX Mobile firmware and the vendor tool you use. Because GenX Mobile provides different configuration interfaces, the exact commands or SMS strings are not presented here. Consult the official GenX Mobile configuration guide or the manufacturer tool for exact command syntax and examples.

If you receive command examples from GenX Mobile or a reseller, apply them in the order recommended by the manufacturer and retain placeholders such as [apn], [apnu], or [apnp] exactly as provided until you replace them with your operator values.

## Configuration Notes

- Firmware differences can change menu names, available transports, and required command syntax. Always confirm the GNX-6 firmware version before following a procedure.
- If your GNX-6 firmware asks for transport selection, choose UDP or TCP as appropriate for your environment; Plaspy accepts both on the same port.
- Plaspy uses the same port for all devices and performs automatic protocol detection so entering the correct server address and port is the primary requirement.
- For deployments that rely on accelerometer events, verify event thresholds and reporting behavior in the GNX-6 configuration tool.
- Keep manufacturer documentation handy for device specific fields and any vendor supplied commands that must be used to enable reporting.

## Why Use Plaspy with This Configuration

Using the GNX-6 with Plaspy gives you a straightforward way to consolidate vehicle and asset location reporting into a single platform. Plaspy’s shared server configuration and automatic protocol detection simplify deployment by minimizing per-device server differences and allowing you to focus on device placement, connectivity, and event validation.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the most current GNX-6 device specific setup details, firmware notes, and manufacturer commands verify the official GenX Mobile documentation at http://www.genxmobile.com/

---
slug: /xirgo/xt49/protocol
id: xt49-protocol
sidebar_label: Protocol
title: Xirgo - XT49 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Xirgo XT49 with Plaspy for reliable remote asset tracking
keywords:
  - Xirgo XT49 protocol
  - Xirgo XT49 GPS protocol
  - XT49 Plaspy compatibility
  - Xirgo tracker communication
  - XT49 tracking protocol
  - Plaspy device integration
  - Plaspy GPS tracker support
  - remote asset tracking XT49
  - solar powered GPS tracker
  - LTE asset tracker XT49
---

# Xirgo - XT49 Protocol

This page covers the public protocol context for using the Xirgo XT49 GPS tracker with Plaspy. It explains how the device communicates with Plaspy in general terms so fleet managers and technical integrators understand the role of the tracker reporting protocol in successful integration and operation.

The XT49 is a rugged, solar powered LTE tracker intended for long term remote deployments. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact behavior can vary with firmware version, hardware revision, and manufacturer implementation. Use this page as a practical protocol overview and consult Xirgo documentation for model and firmware specific details.

## Protocol Overview

The tracker reporting protocol defines how the XT49 identifies itself to a backend, sends location and operational telemetry, and supports server headed commands or acknowledgements where applicable. For remote, low maintenance devices like the XT49 the protocol primarily focuses on efficient, periodic reporting and reliable delivery over cellular networks.

- Enables the XT49 to transmit location updates and operational status to a backend platform such as Plaspy.
- Carries telemetry fields useful for asset monitoring such as GPS position, battery and solar charge status, and movement events.
- Provides a way for the device to identify itself so Plaspy can associate incoming telemetry with the correct asset record.
- Supports configurable reporting intervals to balance tracking resolution and battery life for long term deployments.
- Facilitates event driven messages such as motion detected or tamper alerts that trigger notifications inside Plaspy.

## How Plaspy Detects the Protocol

Plaspy is designed to accept telemetry from many common tracker models while keeping configuration simple for administrators. The platform listens on a shared endpoint and port and automatically determines the appropriate tracker protocol when it receives data, which reduces manual setup steps for many users.

- Plaspy uses a single shared server endpoint and port for device connections, simplifying device side configuration.
- Devices pointed to the Plaspy endpoint do not usually require manual protocol selection inside the platform if they are correctly configured to report to Plaspy.
- Plaspy inspects incoming connections and incoming telemetry to map data to the right device record without user intervention.
- Automatic detection streamlines onboarding for heterogeneous fleets that include devices like the XT49.
- If there are connection issues, checking device configuration and firmware is a practical first step before changing settings in Plaspy.

## Transport and Connection Context

The XT49 reports over cellular networks and can be configured to use either UDP or TCP depending on device support and carrier behavior. Plaspy accepts both transport types on the same shared port so devices can use the protocol and transport that best suit their deployment and power profile.

- Plaspy accepts connections at the domain d.plaspy.com and at the public server IP 54.85.159.138.
- All devices supported by Plaspy use the same TCP or UDP port 8888 for reporting.
- The XT49 may be configured to send data over UDP or TCP to the Plaspy endpoint based on device settings and network conditions.
- Using the shared port simplifies device configuration and reduces per device port management.
- Confirm the device transmit settings and APN configuration on the XT49 so it can reach d.plaspy.com or the IP address above.

## Protocol Compatibility Notes

- Firmware revisions can add, remove, or change telemetry fields and reporting behavior; verify the XT49 firmware level when validating compatibility.
- Hardware revisions and regional variants may alter supported bands or transport behavior; check the vendor model details for your region.
- Some deployments prefer UDP for lower overhead while others use TCP for reliable delivery; ensure the XT49 transport setting matches your needs.
- Manufacturer side configuration options and default behaviors can vary; default factory settings may not match Plaspy expectations until adjusted.
- Always validate that the device is reporting to d.plaspy.com or 54.85.159.138 on port 8888 and that the chosen transport is supported by your carrier.
- When in doubt, consult Xirgo product documentation for device specific notes before making operational changes.

## Why Protocol Understanding Matters

Knowing the basics of how the XT49 communicates helps with setup, troubleshooting, and maintaining reliable telemetry over long term deployments. Understanding the protocol context lets you make informed choices about reporting intervals, transport selection, and what telemetry to expect in Plaspy.

- Helps diagnose connectivity problems by confirming device endpoint, transport, and APN settings.
- Informs power management decisions such as reporting frequency to extend battery life on solar dependent units.
- Clarifies what telemetry fields should appear in Plaspy so alerts and reports can be configured correctly.
- Supports planning for firmware upgrades and predictable changes in telemetry behavior.
- Reduces onboarding time for new devices by focusing checks on network and reporting configuration.

## Why Use Plaspy with This Protocol

Using the Xirgo XT49 with Plaspy provides a durable, low maintenance tracking solution for containers, long haul trailers, and remote assets. The combination of solar energy harvesting and LTE connectivity makes the XT49 well suited to long duration deployments, while Plaspy ingests telemetry to provide real time location, alerts, and historical reporting for operational oversight.

To learn more about how Plaspy can manage XT49 telemetry and support your asset tracking program visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revisions confirm the official information on the manufacturer website https://xirgo.com/. Protocol support and firmware behavior can change over time so verifying current documentation from the manufacturer is recommended.

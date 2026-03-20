---
slug: /navis/ch_5703/features
id: ch_5703-features
sidebar_label: Features
title: Navis - CH -5703 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Navis CH -5703 marine GNSS tracker and how it integrates with Plaspy for vessel monitoring and messaging
keywords:
  - Navis CH -5703 features
  - Navis CH -5703 GPS tracker
  - CH -5703 marine GNSS
  - Navis vessel tracker
  - Navis ECDIS integration
  - Navis AIS compatibility
  - Navis DGPS receiver
  - Plaspy compatible trackers
  - vessel monitoring Plaspy
  - marine tracker features
---

# Navis - CH -5703 Features

This page provides a public feature overview of the Navis CH -5703 and how its capabilities map to Plaspy for vessel monitoring and operational oversight. The information here focuses on observable, non sensitive functions such as navigation data, messaging, and system integration that are relevant when using the CH -5703 with Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, and the manufacturer implementation. For device specific setup, performance limits, and the latest technical details consult the official Navis documentation and firmware notes.

## Feature Overview

The CH -5703 is a marine GNSS navigation instrument intended for river and sea vessels. It combines multi constellation satellite reception with differential correction support and provides navigation parameters, messaging, and integration points that are useful for vessel monitoring systems.

- Multi constellation GNSS reception with differential correction support for enhanced positioning accuracy.
- Standard navigation outputs including current coordinates in a selectable coordinate system, current date and time, speed over ground, and track angle.
- Ability to generate and transmit short text and coded messages to a control center for messaging and status reporting.
- Integration options for ECDIS and AIS to support display and formation of service messages in monitoring systems.
- Compatibility with ship sensor controllers and the ship local area network for incorporation into a broader equipment control center.
- A modification option for satellite compass function to extend the device role in navigation setups.

## Core Features of Navis - CH -5703

- GLONASS GPS GALILEO integrated receiver with support for differential corrections.
- Designed as a NAP GNSS receiver DGPS marine differential subsystem for vessel positioning.
- Outputs of core navigation parameters: vessel coordinates, date and time, speed over ground, and track angle.
- Built in functions to create and send short text and code messages to a monitoring control center.
- Interfaces for integration with ECDIS for service message display and operational interaction.
- Capability to work with AIS when paired through ECDIS for coordinated navigation information.
- Compatibility with third party control systems where a compatible data interface is present.
- Can be deployed as part of an equipment control center or as a response device matching a control center supervisor.

## How These Features Work with Plaspy

Plaspy can ingest and present the CH -5703 navigation outputs and messaging so fleet operators and monitoring centers have consolidated situational awareness. Plaspy's device handling is intended to reflect the practical information the CH -5703 provides without exposing internal device specifics.

- Vessel position and historical track are visible in Plaspy using the reported coordinates and track information.
- Time stamped navigation data such as current date time and speed over ground are available for monitoring and archival.
- Short text and coded messages sent from the CH -5703 can be represented as events or messages inside Plaspy to support operational workflows.
- Integration with ECDIS and AIS-enabled workflows can be reflected in Plaspy as complementary navigation and service message context when available.
- The device can be added to Plaspy monitoring sets so the CH -5703 participates in centralized traffic monitoring and reporting.

## Typical Use Cases

- Continuous vessel position monitoring for river and coastal fleets.
- Centralized control center visibility for navigation and safety monitoring.
- Sending short operational messages from vessel to shore based control centers.
- Integration with ECDIS for coordinated display of service messages and navigation context.
- Using the CH -5703 as part of a monitoring traffic set to support fleet oversight and route management.
- Incorporating GNSS differential corrections for higher accuracy position reporting to monitoring platforms.

## Feature Availability Notes

- Feature sets and message formats can differ across firmware revisions and hardware variants from the manufacturer.
- Integration with ECDIS and AIS depends on the vessel installation and the presence of compatible interfaces and systems.
- Some functions may require specific configuration, or optional modifications, to enable satellite compass behavior or message formatting.
- Regional or model variants may change supported bands or correction modes; always confirm details for your unit.
- For highest accuracy in operational planning, consult Navis technical documentation and any firmware release notes.

## Why Use Plaspy with These Features

Using the Navis CH -5703 with Plaspy brings together reliable marine GNSS navigation data and Plaspy's monitoring and reporting capabilities. Plaspy consolidates position, timing, speed, track, and short message events from compatible devices into a single operational view, helping teams maintain situational awareness across vessels and control centers.

To learn more about how Plaspy supports vessel tracking and device integration visit https://www.plaspy.com. Device features, firmware behavior, and manufacturer details may change over time so please verify the latest device specific information on the official manufacturer site http://navis.ru/
